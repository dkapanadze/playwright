import { test } from "@playwright/test";
import { chromium } from "@playwright/test";

test.skip("", async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  const myAccountLocator = page.locator(
    '//a[@data-toggle="dropdown"]//span[contains(.,"My account")]',
  );
  await myAccountLocator.waitFor({ state: "visible" });

  // Hover over the element
  await myAccountLocator.hover();
  await page.click('text="Login"');

  await page.fill('input[name="email"]', "lambda@gmail.com");

  await page.fill('input[name="password"]', "password");

  await page.click('input[type="submit"]');

  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();

  await newPage.goto("https://ecommerce-playground.lambdatest.io/my-account/");
});
