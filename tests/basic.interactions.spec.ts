import { test, expect } from "@playwright/test";

test.skip("basic interactions", async ({ page }) => {
  const messageInput = page.locator("input#user-message");

  await messageInput.scrollIntoViewIfNeeded();
  console.log(await messageInput.getAttribute("placeholder"));
  await expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message",
  );
});

test.skip("sum", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo",
  );

  const sum1 = page.locator("#sum1");
  const sum2 = page.locator("#sum2");

  const suBtn = page.locator('//button[text()="Get Sum"]');

  let num1 = 10;
  let num2 = 10;

  await sum1.fill("" + num1);
  await sum2.fill("" + num2);
  await suBtn.click();

  await page.waitForTimeout(2000);
});
