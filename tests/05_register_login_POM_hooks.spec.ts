import { test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import AddToCart from "../pages/addToCartPage"

let register, login, addToCart

test.beforeAll(async ({ page, baseURL })=>{
    register = new RegisterPage(page)
    login = new LoginPage(page)
    addToCart = new AddToCart(page)
    await page.goto(`${baseURL}login`)
})

test("Register and Login with POM", async () => {
    //await register.register('test', 'user19', 'test-user19', 'Test@123')
    await login.login('test-user19', 'Test@123')
    await addToCart.addBookToCart("Roomies")
    
})

test.afterAll(async({page}) => {
    page.close()
})