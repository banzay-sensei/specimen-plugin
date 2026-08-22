#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createSpecimenServer } from './create-server.js';

async function main() {
  const server = createSpecimenServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Specimen MCP server ready (stdio).');
}

main().catch((err) => {
  console.error('Specimen MCP server failed to start:', err);
  process.exit(1);
});
