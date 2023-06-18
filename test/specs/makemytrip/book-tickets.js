const homepage = require('../../pageobjects/makemytrip/home-page')
const railwaybookingpage = require('../../pageobjects/makemytrip/railway-booking-page')
const railwaylistingpage = require('../../pageobjects/makemytrip/railway-trains-listing-page')
const railwayticketbooking = require('../../pageobjects/makemytrip/railway-ticket-booking-page')

describe('Makemytrip ticket booking functionality', function(){
    this.retries(2)
    it('Book Railway Tickets End 2 End', async ()=>{
        await browser.maximizeWindow()
        await browser.url('/')
        await homepage.closePopUpAd()
        await homepage.trainTicketsBooking.click()
        await railwaybookingpage.enterJourneyDetails('Gwalior', 'Jhansi', '23', 'All Class')
        await railwaylistingpage.selectCoachClassByIndex(0)
        await railwayticketbooking.selectRefundOptionByIndex(1)
        await railwayticketbooking.enterPassengerDetails('Mahi Sharma', '25', 'Female', 'Indian', 'Lower')
        await railwayticketbooking.enterPassengerContactInformation('mahisharma@gmail.com','1111111111', '208001', 'Uttar Pradesh', 'Mahi Mahal')
    })
})