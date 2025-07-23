import { test  } from '@playwright/test';

test("Login Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).dblclick();
    await page.pause();
});