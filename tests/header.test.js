const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

// test('We can launch a browser (a puppeteer chromium instance)', async () => {
test('Our header contains our brand name', async () => {
  const text = await page.$eval('a.brand-logo', el => el.innerHTML);

  expect(text).toEqual('Blogster');
});





// // sample test via jest
// test('Adds two numbers', () => {
//   const sum = 1 + 2;
//   // expect == assert
//   expect(sum).toEqual(3);
// });



// Test Flow:
/*
    ------------------------
    |    Launch Chromium    |<----|
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    |    Navigate to app    |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    | Click stuff on screen |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    | Use a DOM selector to |     |
    | retrieve the content  |     |
    |     of the element    |     |
    ------------------------      |
               ||                 |
               \/                 |
    ------------------------      |
    |  Write assertions to  |     |
    |   make sure content   |-----|
    |       is correct      |
    ------------------------
*/
