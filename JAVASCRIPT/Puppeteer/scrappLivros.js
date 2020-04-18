const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  await page.waitFor(1000)

  // Scrape
  const result = await page.evaluate(() => {
    return document.querySelector('h3 > a').title
  })

  browser.close()
  return result
};

scrape().then((value) => {
  console.log(value) // sucesso!
})