import { Browser, chromium, Locator, Page, test } from "playwright/test";
 
test("locator test",async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    await page.goto("http://127.0.0.1:5501/form.html.");
 
    const fname:Locator=await page.locator('#txt1');
 
    await fname.fill("GOKUL M");
});