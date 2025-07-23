import {test} from '@playwright/test';
import { loginpage1 } from './pages/loginpage2';

const users:any[] = [
    {username:"standard_user", password:"secret_sauce"},
    {username:"locked_out_user", password:"secret_sauce"}
]
test("login_test_case",async({page})=>{
for(let user of users){
    const loginpage = new loginpage1(page);
    await loginpage.goto();
    await loginpage.login("standard_user", "secret_sauce");
} 
   
})
