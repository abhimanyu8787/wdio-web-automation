const loginpage = require('../../pageobjects/ecommerce/login-page')
const shoppage = require('../../pageobjects/ecommerce/shop-page')
const reviewpage = require('../../pageobjects/ecommerce/review-page')
const expectchai = require('chai').expect
const fs = require('fs')

let credentials = JSON.parse(fs.readFileSync('test/testdata/logintest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('test/testdata/e2etest.json'))
describe('Ecommerce Application', ()=>{

    credentials.forEach(({username,password}) => {
        it('Login Fail Page', async ()=>{
            await browser.url("/loginpagePractise/")
            await browser.maximizeWindow()
            await loginpage.login(username, password)
            browser.waitUntil(async ()=>{await loginpage.signIn.getAttribute('value') === 'Sign In'}, {
                timeout: 5000,
                timeoutMsg: 'Error message is not showing up'
            })
            console.log(await loginpage.alert.getText())
            await expect(await loginpage.textInfo).toHaveTextContaining('username is rahulshettyacademy')
        })
    })

    e2eCredentials.forEach(({products})=>{
        it.only('End 2 End Test', async()=>{
            await browser.url("/loginpagePractise/")
            await browser.maximizeWindow()
            await loginpage.login('rahulshettyacademy', 'learning')
            //wait until checkout button is displayed
            await shoppage.checkout.waitForExist()
            await shoppage.addProductToCart(products)
            await shoppage.checkout.click()
            let sumOfProducts = await reviewpage.sumOfProducts()
            let totalIntValue = await reviewpage.totalFormatterPrice()
            expectchai(sumOfProducts).to.equal(totalIntValue)
        })
    })
    
})