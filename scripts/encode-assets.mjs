/**
 * encode-assets.mjs
 * Base64-encodes binary files from public/ into assets-b64/.
 * Run once to prepare the repository for text-only deployments.
 *
 * Usage: node scripts/encode-assets.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'public');
const DEST_DIR = path.join(ROOT, 'assets-b64');

// Binary extensions to encode
const BINARY_EXTS = new Set(['.woff2', '.woff', '.ttf', '.otf', '.png', '.jpg', '.jpeg', '.ico', '.webp', '.gif']);

async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walk(fullPath));
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (BINARY_EXTS.has(ext)) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

async function main() {
    const binaryFiles = await walk(SRC_DIR);

    if (binaryFiles.length === 0) {
        console.log('[encode-assets] No binary files found in public/ — nothing to encode.');
        process.exit(0);
    }

    let encoded = 0;
    for (const srcPath of binaryFiles) {
        const rel = path.relative(SRC_DIR, srcPath);
        const destPath = path.join(DEST_DIR, rel + '.b64');
        const destDir = path.dirname(destPath);

        await mkdir(destDir, { recursive: true });

        const binary = await readFile(srcPath);
        const b64 = binary.toString('base64');
        await writeFile(destPath, b64, 'utf-8');
        console.log(`[encode-assets] Encoded: ${rel}`);
        encoded++;
    }

    console.log(`[encode-assets] Done. ${encoded} file(s) encoded into assets-b64/.`);
}

main().catch((err) => {
    console.error('[encode-assets] Error:', err);
    process.exit(1);
});
