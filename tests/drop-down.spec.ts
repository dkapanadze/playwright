import { test } from "@playwright/test";

test.skip("drop down", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo",
  );

  await page.selectOption("select#select-demo", { value: "Friday" });

  await page.selectOption("select#multi-select", [
    { value: "New York" },
    { value: "Ohio" },
  ]);
  await page.waitForTimeout(4000);
});
