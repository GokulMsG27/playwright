import { test, expect } from '@playwright/test';
 
test("custom assertion", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/custassertion.html");
 
  // Remove page.pause() unless you're debugging
 await page.pause();
 
  const textValue = await page.locator('#d1').textContent();
  const value = parseInt(textValue || '0');
 
//   await expect(value > 10).toBeTruthy();

//   const msg:any = await page.locator('#d5').textContent();

//   await expect(msg.length > 5).toBeGreaterThan(5)


const message = await page.locator('#d2');
    await asertMinCharLength(message,5);
    })
 
    const asertMinCharLength = async(locator:any,minLength:number)=>{
        const text = await locator.textContent();
        await expect((text || '').length).toBeGreaterThan(minLength);
    }