const homepage = require('../../pageobjects/makemytrip/home-page')
const railwaybookingpage = require('../../pageobjects/makemytrip/railway-booking-page')

describe('Makemytrip ticket booking functionality', ()=>{
    it('Book Railway Tickets End 2 End', async ()=>{
        await browser.url('https://www.makemytrip.com/')
        await browser.maximizeWindow()
        await homepage.closePopUpAd()
        await homepage.trainTicketsBooking.click()
        await railwaybookingpage.enterJourneyDetails('Gwalior', 'Patna', 'Dummy', 'AC')
        await browser.pause(5000)
    })
})