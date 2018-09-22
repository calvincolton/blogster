const mongoose = require('mongoose');
const Page = require('./helpers/page');

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
  const { todos } = mongoose.connection.collections;
  await todos.drop();
  await mongoose.disconnect();
});

test('The header contains the correct text (our brand name).', async () => {
  const text = await page.getContentsOf('a.brand-logo');

  expect(text).toEqual('Blogster');
});

test('Clicking login starts the google oAuth flow.', async () => {
  await page.click('.right a');
  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
});

test('When a user is signed in, the logout button is displayed', async () => {
  await page.login();

  const text = await page.getContentsOf('a[href="/auth/logout"]');

  expect(text).toEqual('Logout');
});
