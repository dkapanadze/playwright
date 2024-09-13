import { test, chromium } from "@playwright/test";

test.skip("", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo",
  );

  page.on("dialog", async (alert) => {
    console.log(await alert.message(), "message");
    console.log(await alert.defaultValue(), "defaultValue");
    await alert.accept();
  });
  await page.locator("button:has-text('Click me')").nth(0).click();
});
