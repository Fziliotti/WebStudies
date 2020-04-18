const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 870,
    height: 700,
    deviceScaleFactor: 1,
  });

  await page.goto(`https://www.vipermu.net`);

  await page.tap('.uk-navbar-toggle');

  await page.waitFor(1000);

  await page.evaluate(() => {
    document.querySelectorAll("#comments-form-true input[type='text']")[1].value = 'fabricio'
  });

  await page.evaluate(() => {
    document.querySelectorAll('.acymailing_form tr td input[type="password"]')[1].value = 'fabricio'
  });

  await page.evaluate(() => {
    document.querySelector(".acysubbuttons input[type='submit']").click();
  });


  await page.waitFor(5000)
  await page.screenshot({ path: 'screenshots/vipermu.png' });

  await browser.close();
})();