const { chromium } = require('playwright');
const path = require('path');

const BASE = 'https://parkwardrr.github.io/weekend-to-release/';
const OUT = path.join(__dirname, '..', 'public', 'screenshots');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // wait for mermaid to render

  // 1. Hero
  console.log('Capturing hero...');
  await page.screenshot({
    path: path.join(OUT, 'hero.png'),
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });

  // 2. Scroll to PDLC diagram area
  console.log('Capturing PDLC diagram...');
  await page.evaluate(() => window.scrollTo(0, 850));
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, 'pdlc-diagram.png'),
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });

  // 3. Learning path - Phase 1 & 2
  console.log('Capturing learning path...');
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, 'learning-path.png'),
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });

  // 4. More phases
  console.log('Capturing phases...');
  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, 'phases.png'),
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });

  // 5. Pro cards at bottom
  console.log('Capturing pro cards...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1200));
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, 'pro-cards.png'),
    clip: { x: 0, y: 0, width: 1280, height: 900 },
  });

  await browser.close();
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
