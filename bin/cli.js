#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { scan } from '../src/scanner.js';
import { listDirections, getDirection } from '../src/directions.js';
import { buildBrief } from '../src/brief.js';
import { buildExport } from '../src/export.js';

const args = process.argv.slice(2);
const cmd = args[0];

if (cmd === '--mcp') {
  // Launch the MCP server (used by mcp.json / config.toml entries: `npx specimen-cli --mcp`)
  await import('../src/mcp-server.js');
  // mcp-server.js runs its own main() on import and keeps the process alive via stdio.
  await new Promise(() => {}); // never resolve — process stays alive for the MCP transport
}

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function flag(name, fallback = null) {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return args[i + 1];
}

function printHelp() {
  console.log(`
Specimen — audit visuel anti-générique + prescription de direction artistique

Usage:
  specimen scan <fichier>              Analyse un fichier (CSS, JSX, HTML...)
  specimen scan --stdin                Analyse le contenu passé sur stdin
  specimen directions                  Liste les directions artistiques disponibles
  specimen prescribe <direction>       Affiche le brief de contraintes à faire suivre à un LLM
  specimen export --direction <key> --format <css|tailwind|skill> --tokens <fichier.json>
                                        Formate un jeu de tokens déjà généré

Exemples:
  specimen scan src/styles.css
  cat src/App.jsx | specimen scan --stdin
  specimen directions
  specimen prescribe brutalist
  specimen export --direction brutalist --format css --tokens tokens.json
`);
}

function cmdScan() {
  let code;
  if (args.includes('--stdin')) {
    code = readStdin();
  } else if (args[1] && !args[1].startsWith('--')) {
    code = readFileSync(args[1], 'utf8');
  } else {
    code = readStdin();
  }
  if (!code || !code.trim()) {
    console.error('Aucun code à analyser. Passe un fichier ou utilise --stdin.');
    process.exit(1);
  }
  const result = scan(code);
  console.log(`\nScore de généricité : ${result.score}/100 — ${result.verdict}\n`);
  if (result.hits.length === 0) {
    console.log('Aucun tic générique détecté.');
  } else {
    result.hits.forEach(h => {
      console.log(`  [+${h.weight}] ${h.label}`);
      console.log(`         ${h.explain}`);
    });
  }
  console.log(`\nPartageable : "Mon interface est ${result.score}% générique selon Specimen 🔬"\n`);
}

function cmdDirections() {
  const dirs = listDirections();
  console.log('\nDirections disponibles :\n');
  dirs.forEach(d => {
    console.log(`  ${d.key.padEnd(10)} ${d.name} — ${d.tag}`);
    console.log(`             ${d.desc}\n`);
  });
}

function cmdPrescribe() {
  const key = args[1];
  if (!key || !getDirection(key)) {
    console.error(`Direction inconnue ou manquante. Choix possibles: ${listDirections().map(d=>d.key).join(', ')}`);
    process.exit(1);
  }
  console.log(buildBrief(key));
  console.log('\n---\nCopie ce brief au début d\'une conversation avec ton assistant IA (chat ou agent). Il doit produire le JSON de tokens en respectant strictement ces contraintes, puis l\'appliquer à ton code.\n');
}

function cmdExport() {
  const direction = flag('direction');
  const format = flag('format');
  const tokensPath = flag('tokens');
  if (!direction || !format || !tokensPath) {
    console.error('Usage: specimen export --direction <key> --format <css|tailwind|skill> --tokens <fichier.json>');
    process.exit(1);
  }
  const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
  const text = buildExport(tokens, direction, format);
  console.log(text);
}

switch (cmd) {
  case 'scan': cmdScan(); break;
  case 'directions': cmdDirections(); break;
  case 'prescribe': cmdPrescribe(); break;
  case 'export': cmdExport(); break;
  default: printHelp();
}
