import { test } from "@playwright/test";

test.skip("window", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo",
  );

  const [test, multiPage] = await Promise.all([
    page.click("#followboth"),
    page.waitForEvent("popup"),
  ]);

  const pages = multiPage.context().pages();
  console.log(pages.length, "number of tabs");
  pages.forEach((page) => {
    console.log(page.url(), "url");
  });
});
