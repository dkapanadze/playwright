import { test } from "@playwright/test";

test.skip("frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  //   const allFrames = page.frames();

  //   const myFrame = await page.frame("firstFr");

  //   await myFrame?.fill('input[name="name"]', "LambdaTest");

  const frame = await page.frameLocator("#firstFr");
  console.log(frame, "frame");
  await frame.locator('input[name="name"]').fill("LambdaTest");
});
