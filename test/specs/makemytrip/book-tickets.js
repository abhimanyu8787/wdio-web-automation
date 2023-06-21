const homepage = require('../../pageobjects/makemytrip/home-page')
const railwaybookingpage = require('../../pageobjects/makemytrip/railway-booking-page')
const railwaylistingpage = require('../../pageobjects/makemytrip/railway-trains-listing-page')
const railwayticketbooking = require('../../pageobjects/makemytrip/railway-ticket-booking-page')
const traindetails = require('../../pojos/makemytrip/train-details')

describe('Makemytrip ticket booking functionality', function(){
    
    this.retries(0)

    it.only('Verify Train Details at Listing and Booking Page', async ()=>{
        await browser.maximizeWindow()
        await browser.url('/')
        //await homepage.closePopUpAd()
        await homepage.trainTicketsBooking.click()
        await railwaybookingpage.enterJourneyDetails('Gwalior', 'Jhansi', '23', 'All Class')
        browser.pause(4000)
        const trainSelected = railwaylistingpage.getTrainDetailsObject()
        console.log(trainSelected.trainName)
        console.log(trainSelected.trainNumber)
        //await railwaylistingpage.selectCoachClassByIndex(0)
        //const real = await railwayticketbooking.getTrainDetailsObject()
        //console.log(real)
        
    })

    it('Book Railway Tickets End 2 End', async ()=>{
        await browser.maximizeWindow()
        await browser.url('/')
        await homepage.closePopUpAd()
        await homepage.trainTicketsBooking.click()
        await railwaybookingpage.enterJourneyDetails('Gwalior', 'Jhansi', '23', 'All Class')
        await railwaylistingpage.selectCoachClassByIndex(0)
        await railwayticketbooking.selectRefundOptionByIndex(1)
        await railwayticketbooking.enterPassengerDetails('Mahi Sharma', '25', 'Female', 'Indian', 'Lower')
        await railwayticketbooking.enterPassengerDetails('Ankita Jha', '25', 'Female', 'Indian', 'Lower')
        await railwayticketbooking.enterPassengerDetails('Smriti Tiwari', '25', 'Female', 'Indian', 'Lower')
        await railwayticketbooking.enterPassengerContactInformation('mahisharma@gmail.com','1111111111', '208001', 'Uttar Pradesh', 'Mahi Mahal')
    })
})