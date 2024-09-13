import { test as baseTest } from "@playwright/test";
import RegisterPage from "../pages/registerPage";

interface pages {
  registerPage: RegisterPage;
}

const myTest = baseTest.extend<pages>({
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});

export const test = myTest;
