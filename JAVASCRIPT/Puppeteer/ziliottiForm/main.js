const puppeteer = require('puppeteer');

(async () => {

  for (let i = 0; i < 200; i++) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // await page.goto(`https://www.ziliotti.com.br/`);
    await page.setViewport({
      width: 1620,
      height: 1000,
      deviceScaleFactor: 1,
    });

    await page.type('#contatoName', 'fabricio' + i);
    await page.type('#contatoEmail', 'ffz.z' + i + 'iliotti@gmail.com');
    await page.type('#contatoSubject', 'Testando aqui no puppetter' + i);
    await page.type('#contatoMessage', 'Testando puppeteer aqui no site do felipinho aeaeae aeaea dsadhsahudsa');

    await page.evaluate(() => {
      document.querySelector('.contato-content button').click();
    });

    await page.screenshot({ path: 'screenshots/ziliotti.png' });

    await browser.close();
  }

})();