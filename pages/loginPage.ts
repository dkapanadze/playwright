import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(email: string) {
    await this.page.locator("#input-email").fill(email);
  }

  async enterPassword(password: string) {
    await this.page.locator("#input-password").fill(password);
  }

  async clickLogin() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("input[value='Login']"),
    ]);
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
