// import {test,expect} from '@playwright/test';

// test.beforeEach("test 1",()=>{
//     console.log("Madhu");

// });
// test("test 2",()=>{
//     console.log("Nila");

// });
// test("test 3",()=>{
//     console.log("abi");


// });
// test("test 4",()=>{
//     console.log("Hi gokul");


// });
// test.afterEach("test 5",()=>{
//     console.log("Good night");


// });

import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("test cases for Souce app", () => {
test.beforeEach("Login Test", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    // await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
     await page.getByRole('button', { name: 'LOGIN' }).click();
});
test('Home Page Test', async ({ page }) => {
    // await page.goto('https://www.saucedemo.com/v1/');

    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    //  await page.getByRole('button', { name: 'LOGIN' }).click();
     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
     await page.getByRole('button', { name: 'ADD TO CART' }).click();
    //  await page.pause();
 
 
});
test('test', async ({ page }) => {
   
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.pause();
});
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 