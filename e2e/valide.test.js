/**
 * @jest-environment node
 */

import puppeteer from 'puppeteer';

describe('Card Number validate', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Valid number should change class of all icons except right icon', async () => {
    await page.goto('http://localhost:8080/');
    await page.waitForSelector('.input_validate');

    const input = await page.$('.input_validate');
    const submitBtn = await page.$('.button_validate');

    await input.type('4716 4403 2731 8585');
    await submitBtn.click();

    await page.waitForSelector('.icon_masterCard.icon_inactive');
  }, 25000);

  test('Invalid number should not change class of all icons', async () => {
    await page.goto('http://localhost:8080/');
    await page.waitForSelector('.input_validate');

    const input = await page.$('.input_validate');
    const submitBtn = await page.$('.button_validate');

    await input.type('4716 5403 2731 8585');
    await submitBtn.click();

    await page.waitForSelector('.icon_masterCard.icon_active');
  }, 25000);

  afterEach(async () => {
    await browser.close();
  });
});
