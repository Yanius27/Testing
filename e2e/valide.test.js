/**
 * @jest-environment node
 */

import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
  });

  test('Valid number should change class of all icons except right icon', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.input_validate');

    const input = await page.$('.input_validate');
    const submitBtn = await page.$('.button_validate');

    await input.type('4716 4403 2731 8585');
    await submitBtn.click();

    await page.waitForSelector('.icon_masterCard.icon_inactive');
  }, 30000);

  test('Invalid number should not change class of all icons', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.input_validate');

    const input = await page.$('.input_validate');
    const submitBtn = await page.$('.button_validate');

    await input.type('4716 5403 2731 8585');
    await submitBtn.click();

    await page.waitForSelector('.icon_masterCard.icon_active');
  }, 30000);

  afterAll(async () => {
    if (browser) await browser.close();
    if (server) server.kill();
  });
});
