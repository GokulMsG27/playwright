import {Locator, test} from '@playwright/test';
import { loginpage1 } from './pages/loginpage2';
import { users } from './pages/credentials';
 
// const users:any[] = [
//     {username:"standard_user",password:"secret_sauce",testcase:"login with credentials"},
//     {username:"standard_user",password:"secret_sauce",testcase:"login with locked user"}
// ]
for (let user of users){
    test(`${user.testcase}`,async({page})=>{
 
        const loginpage2 = new loginpage1(page);
        await loginpage2.goto();
        await loginpage2.login(user.username,user.password);
    });
}