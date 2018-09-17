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

test('The header contains the correct text (our brand name).', async () => {
  const text = await page.$eval('a.brand-logo', el => el.innerHTML);

  expect(text).toEqual('Blogster');
});

test('Clicking login starts the google oAuth flow.', async () => {
  await page.click('.right a');
  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
});

test.only('When a user is signed in, the logout button is displayed', async () => {
  const userId = '5b81a886a2222003deb86cf0';  // user _id as defined in mlab users table

  const Buffer = require('safe-buffer').Buffer;
  const sessionObject = {
    passport: {
      user: userId
    }
  };
  const sessionString = Buffer.from(
    JSON.stringify(sessionObject)
  ).toString('base64');

  const Keygrip = require('keygrip');
  const keys = require('../config/keys');
  const keygrip = new Keygrip([keys.cookieKey]);
  const sig = keygrip.sign('session=' + sessionString);

  await page.setCookie({ name: 'session', value: sessionString });
  await page.setCookie({ name: 'session.sig', value: sig });
  await page.goto('localhost:3000');
  await page.waitFor('a[href="/auth/logout"]');

  const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

  expect(text).toEqual('Logout');
});
