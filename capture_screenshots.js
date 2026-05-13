const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Starting screenshot capture...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const screenshotDir = path.join(__dirname, 'screenshots_mobile');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const fileUrl = 'file://' + path.join(__dirname, 'index.html');
  console.log(`Navigating to ${fileUrl}`);
  await page.goto(fileUrl);

  // 1. Top Page
  console.log('Capturing top page (top and bottom)...');
  await page.waitForTimeout(2000); // Wait for fade-in animations
  
  // Top part of start screen
  await page.screenshot({ path: path.join(screenshotDir, '01_top_1.png') });
  
  // Bottom part of start screen (scroll to the button)
  await page.evaluate(() => {
    const btn = document.getElementById('start-btn');
    btn.scrollIntoView();
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotDir, '01_top_2.png') });

  // 2. Questions
  console.log('Capturing questions...');
  await page.click('#start-btn');
  for (let i = 1; i <= 8; i++) {
    await page.waitForTimeout(800); // Wait for transition
    await page.screenshot({ path: path.join(screenshotDir, `02_q${i}.png`) });
    // Click first option
    const options = await page.$$('.option-btn');
    if (options.length > 0) {
      await options[0].click();
    }
  }

  // 3. Results (6 types)
  console.log('Capturing results...');
  const types = ['visionary', 'coaching', 'affiliative', 'democratic', 'pacesetting', 'commanding'];
  let index = 10;
  for (const type of types) {
    console.log(`Processing type: ${type}`);
    // Inject JS to force result
    await page.evaluate((t) => {
      scores = {
        visionary: 0, coaching: 0, affiliative: 0,
        democratic: 0, pacesetting: 0, commanding: 0
      };
      scores[t] = 10;
      firstReached = {};
      firstReached[t] = [1];
      showResults();
    }, type);

    await page.waitForTimeout(2000); // Wait for result display

    // Top part
    await page.screenshot({ path: path.join(screenshotDir, `${index}_result_${type}_top.png`) });
    index++;

    // Bottom part
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, `${index}_result_${type}_bottom.png`) });
    index++;
  }

  console.log('All screenshots captured.');
  await browser.close();
})();
