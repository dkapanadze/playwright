import { test } from "../fixtures/pomFixtures";

test("register test_01", async ({ page, baseURL, registerPage, userInfo }) => {
  await page.goto(`${baseURL}route=account/register`);

  await registerPage.enterFirstName(userInfo.firstName);
  await registerPage.enterLastName(userInfo.lastName);
  await registerPage.enterTelephone(userInfo.telephone);
  await registerPage.enterEmail(userInfo.email);
  await registerPage.enterPassword(userInfo.password);
  await registerPage.enterConfirmPassword(userInfo.password);

  //   await expect(registerPage.isSubscribeChecked()).toBeChecked();
  await page.waitForTimeout(1000);
  await registerPage.agreeTerms();
  await registerPage.continueRegister();
  await page.waitForTimeout(2000);
});
