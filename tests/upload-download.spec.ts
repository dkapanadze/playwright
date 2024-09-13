import { test } from "@playwright/test";

test.skip("download", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo",
  );

  await page.locator("#textbox").type("Hello, World!");

  page.click("#create");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download"),
  ]);

  const fileName = download.suggestedFilename();
  await download.saveAs(fileName);

  const path = await download.path();
  console.log(path, "path");

  await page.waitForTimeout(2000);
});

test("upload", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

  await page.setInputFiles("input[type=file]", [
    "1684771304151.jpeg",
    "1.jpeg",
  ]);

  await page.waitForTimeout(2000);
});
