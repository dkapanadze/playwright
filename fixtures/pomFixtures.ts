import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import { test as baseTest } from "./userFixture";

type pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
};

const testPages = baseTest.extend<pages>({
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export const test = testPages;
