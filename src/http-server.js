#!/usr/bin/env node
/**
 * Remote MCP server over Streamable HTTP.
 *
 * Deploy this (Cloudflare Workers/Render/Railway/Fly.io/a VPS — anywhere that
 * can run Node and expose a public HTTPS URL) and the same 4 Specimen tools
 * become usable as a real "connector" inside Claude.ai, Claude Desktop,
 * ChatGPT (Developer Mode), Perplexity, Grok, and Mistral Le Chat — no local
 * install, no copy-pasting prompts. This is the highest-reach distribution
 * channel: it turns "chat mode" users from copy-paste into a proper tool call.
 *
 * Stateless by design (sessionIdGenerator: undefined) since none of
 * Specimen's tools need session state — every call is self-contained.
 */
import { createMcpExpressApp } from '@modelcontextprotocol/sdk/server/express.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createSpecimenServer } from './create-server.js';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOST = process.env.HOST || '0.0.0.0'; // 0.0.0.0 to accept traffic from a reverse proxy / platform router

const app = createMcpExpressApp({ host: HOST, allowedHosts: process.env.ALLOWED_HOSTS?.split(',') });

app.get('/', (req, res) => {
  res.status(200).send('Specimen MCP server is running. POST to /mcp with an MCP client.');
});

app.post('/mcp', async (req, res) => {
  try {
    const server = createSpecimenServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('close', () => {
      transport.close();
      server.close();
    });
  } catch (err) {
    console.error('Error handling MCP request:', err);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: { code: -32603, message: 'Internal server error' },
        id: null
      });
    }
  }
});

// Streamable HTTP is POST-only for a stateless server; reject GET/DELETE cleanly.
app.get('/mcp', (req, res) => {
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: '2.0',
    error: { code: -32000, message: 'Method not allowed. Use POST /mcp.' },
    id: null
  }));
});
app.delete('/mcp', (req, res) => {
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: '2.0',
    error: { code: -32000, message: 'Method not allowed.' },
    id: null
  }));
});

app.listen(PORT, HOST, () => {
  console.log(`Specimen remote MCP server listening on http://${HOST}:${PORT}/mcp`);
  console.log('Point a Claude.ai / ChatGPT / Perplexity / Grok / Mistral custom connector at: https://<ton-domaine>/mcp');
});

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
