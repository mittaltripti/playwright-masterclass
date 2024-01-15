import {test} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import AddToCart from "../pages/addToCartPage"

test("Register and Login with POM", async({page, baseURL}) =>{
    const register = new RegisterPage(page)
    const login = new LoginPage(page)
    const addToCart = new AddToCart(page)
    await page.goto(`${baseURL}login`)
   // await register.register('test','user24','test-user24','Test@123')
    await login.login('test-user18','Test@123')
    await addToCart.addBookToCart("Roomies")
})