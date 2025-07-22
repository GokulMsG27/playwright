import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


test("Login Test", async ({ page }) => {
    await page.goto('http://quiz.hematitecorp.com/');
    // await page.pause();
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('gokul.mu@changepond.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Forget2701@msg');
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    // await page.pause();
});

test('Voucher code', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
  await page.getByRole('button', { name: 'submit' }).click();
//   await page.pause();
});
