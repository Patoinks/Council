import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const base = new URL('../public/tonkai/leto.json', import.meta.url);
const manifest = JSON.parse(readFileSync(base, 'utf8'));
const profile = JSON.parse(readFileSync(new URL('../personalities/nezha.json', import.meta.url), 'utf8'));
const sourceRevision = manifest.revision;
manifest.model_name = 'G4 Nezha';
manifest.personality = profile;
manifest.base_model = { name: 'G4 Leto', revision: sourceRevision, sha256: manifest.sha256, learned_weights_unchanged: true };
manifest.revision = createHash('sha256').update(sourceRevision + JSON.stringify(profile)).digest('hex');
writeFileSync(new URL('../public/tonkai/nezha.json', import.meta.url), JSON.stringify(manifest, null, 2) + '\n');
writeFileSync(new URL('../public/tonkai/nezha-version.json', import.meta.url),
  JSON.stringify({ model_name: manifest.model_name, revision: manifest.revision, sha256: manifest.sha256,
    personality: profile.id, personality_version: profile.version }, null, 2) + '\n');
console.log(JSON.stringify({ model: manifest.model_name, revision: manifest.revision, sha256: manifest.sha256 }));
