import { test as baseTest } from "@playwright/test";

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
}

export const userInfo: UserInfo = {
  firstName: "John",
  lastName: "Doe",
  email: "emailllll@gmail.com",
  password: "password",
  confirmPassword: "password",
  telephone: "1234567890",
};

const testWithUser = baseTest.extend<{ userInfo: UserInfo }>({
  userInfo: async ({}, use) => {
    await use(userInfo);
  },
});

export { testWithUser as test };
