/**
 * decode-assets.mjs
 * Walks assets-b64/ (mirror of public/, files stored as .b64 text)
 * and decodes each file into public/.
 *
 * E.g. assets-b64/fonts/Satoshi-Variable.woff2.b64 → public/fonts/Satoshi-Variable.woff2
 *
 * Run: node scripts/decode-assets.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'assets-b64');
const DEST_DIR = path.join(ROOT, 'public');

async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walk(fullPath));
        } else if (entry.name.endsWith('.b64')) {
            files.push(fullPath);
        }
    }
    return files;
}

async function main() {
    if (!existsSync(SRC_DIR)) {
        console.log('[decode-assets] assets-b64/ not found - skipping (no binary assets encoded yet).');
        process.exit(0);
    }

    const b64Files = await walk(SRC_DIR);

    if (b64Files.length === 0) {
        console.log('[decode-assets] No .b64 files found in assets-b64/ - skipping.');
        process.exit(0);
    }

    let decoded = 0;
    for (const b64Path of b64Files) {
        const rel = path.relative(SRC_DIR, b64Path);
        // Strip .b64 extension to get the real filename
        const destRel = rel.slice(0, -4); // remove ".b64"
        const destPath = path.join(DEST_DIR, destRel);
        const destDir = path.dirname(destPath);

        await mkdir(destDir, { recursive: true });

        const b64Content = await readFile(b64Path, 'utf-8');
        const binary = Buffer.from(b64Content.trim(), 'base64');
        await writeFile(destPath, binary);
        console.log(`[decode-assets] Decoded: ${destRel}`);
        decoded++;
    }

    console.log(`[decode-assets] Done. ${decoded} file(s) decoded into public/.`);
}

main().catch((err) => {
    console.error('[decode-assets] Error:', err);
    process.exit(1);
});
