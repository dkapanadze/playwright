import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";

const email = "emailllll@gmail.com";
const password = "password";
const confirm = "password";
const firstName = "John";
const lastName = "Doe";
const telephone = "1234567890";

test.skip("register test_01", async ({ page, baseURL }) => {
  const registerPage = new RegisterPage(page);
  await page.goto(`${baseURL}route=account/register`);

  await registerPage.enterFirstName(firstName);
  await registerPage.enterLastName(lastName);
  await registerPage.enterTelephone(telephone);
  await registerPage.enterEmail(email);
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword(confirm);

  //   await expect(registerPage.isSubscribeChecked()).toBeChecked();
  await page.waitForTimeout(1000);
  await registerPage.agreeTerms();
  await registerPage.continueRegister();
  await page.waitForTimeout(2000);
});

test.skip("login", async ({ page, baseURL }) => {
  const loginPage = new LoginPage(page);
  await page.goto(`${baseURL}route=account/login`);

  await loginPage.login(email, password);
  expect(await page.title()).toBe("My Account");
});
