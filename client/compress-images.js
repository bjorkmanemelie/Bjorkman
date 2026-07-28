// compress-images.js
// Komprimerar alla bilder i src/assets och skriver över dem med mindre filstorlek.
// Kör: node compress-images.js
//
// OBS: Ta gärna en backup av assets-mappen innan du kör, ifall du vill kunna
// gå tillbaka till originalbilderna senare.

import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.join("src", "assets");
const MAX_WIDTH = 1600; // bilder bredare än detta skalas ner (bra för webb)
const JPEG_QUALITY = 75; // 70-80 ger bra balans mellan kvalitet och filstorlek

const imageExtensions = [".jpg", ".jpeg", ".png"];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExtensions.includes(ext)) return;

  const originalSize = fs.statSync(filePath).size;
  const tempPath = filePath + ".tmp";

  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = image.resize({
    width: MAX_WIDTH,
    withoutEnlargement: true, // förstora inte små bilder
  });

  if (ext === ".png") {
    pipeline = pipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  await pipeline.toFile(tempPath);

  const newSize = fs.statSync(tempPath).size;

  // Skriv över originalfilen med den komprimerade versionen
  fs.renameSync(tempPath, filePath);

  const savedPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
  console.log(
    `${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(
      newSize /
      1024 /
      1024
    ).toFixed(2)} MB (${savedPercent}% mindre)`
  );
}

async function run() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Hittar inte mappen: ${ASSETS_DIR}. Kör skriptet från client-mappen.`);
    process.exit(1);
  }

  const files = fs.readdirSync(ASSETS_DIR);
  console.log(`Komprimerar bilder i ${ASSETS_DIR}...\n`);

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    if (fs.statSync(filePath).isFile()) {
      try {
        await compressImage(filePath);
      } catch (err) {
        console.error(`Kunde inte komprimera ${file}:`, err.message);
      }
    }
  }

  console.log("\nKlart! Kör 'npm run build' igen för att se nya filstorlekar.");
}

run();