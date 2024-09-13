import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.locator("#input-firstname").fill(firstName);
  }
  async enterLastName(lastName: string) {
    await this.page.locator("#input-lastname").fill(lastName);
  }
  async enterEmail(email: string) {
    await this.page.locator("#input-email").fill(email);
  }
  async enterTelephone(num: string) {
    await this.page.locator("#input-telephone").fill(num);
  }
  async enterPassword(password: string) {
    await this.page.locator("#input-password").fill(password);
  }
  async enterConfirmPassword(password: string) {
    await this.page.locator("#input-confirm").fill(password);
  }

  isSubscribeChecked() {
    return this.page.locator("#input-newsletter-no");
  }

  async agreeTerms() {
    await this.page.click('label[for="input-agree"]');
  }

  async continueRegister() {
    await Promise.all([
      this.page.waitForNavigation({
        waitUntil: "networkidle",
      }),
      this.page.click("input[value='Continue']"),
    ]);
  }
}
