import {  When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import AddToCart from "../../pages/addToCartPage"
import {myPage} from "./../../fixtures/base"

let addToCart: AddToCart
setDefaultTimeout(60 * 1000 * 2)

When('user search for a {string}', async function (bookName) {
    addToCart = new AddToCart(myPage.page)
    addToCart.searchBook(bookName)
  });

  When('user add the {string} to the cart', async function (bookName) {
    addToCart.addBookToCart(bookName)
  });