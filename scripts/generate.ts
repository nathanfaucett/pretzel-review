import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { encrypt } from '../src/lib/crypto.ts';

async function parseKeyValueFile(filePath: URL | string): Promise<Record<string, string>> {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.toString("utf8").split(/\r?\n/);
  const result: Record<string, string> = {};

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const [key, ...rest] = line.split('=');
    if (!key || rest.length === 0) continue;

    result[key.trim()] = rest.join('=').trim(); // handles values with '='
  }

  return result;
}

const secrets = await parseKeyValueFile(new URL(join(dirname(import.meta.url), '..', '.secret')));

const result = await encrypt(
  secrets.PAT, 
  secrets.PASSWORD
);

console.log(result);