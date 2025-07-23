import {test,expect} from '@playwright/test';
 
test("should mock get request",async({page})=>{
    console.log("simple get test");
    await page.route("http://127.0.0.1:5500/tests/mockapi.html",(route)=>{
            route.fulfill({
                status:200,contentType:'application/json',
                body:JSON.stringify([{id:1,name:"Gokul"},{id:2,name:"hemanth"}]),
 
               
            })
    });
    await page.goto("http://127.0.0.1:5500/tests/mockapi.html ");
    const userList =  await page.locator(".user").allTextContents();
    await expect(userList).toContain("hemanth");
});