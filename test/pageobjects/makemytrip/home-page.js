class homePage{
    get flightsBooking(){return $('//a[@class="makeFlex hrtlCenter column active"]')}
    get trainTicketsBooking(){return $('(//a[@class="makeFlex hrtlCenter column"])[4]')}
    get popUpAd(){return $('//div[@id="webklipper-publisher-widget-container-notification-container"]')}
    get popUpCloseIcon(){return $('//a[@id="webklipper-publisher-widget-container-notification-close-div"]')}
    get popUpFrame(){return $('[id="webklipper-publisher-widget-container-notification-frame"]')}

    async closePopUpAd(){
        await browser.pause(4000)
        await browser.switchToFrame(await this.popUpFrame)
        await this.popUpCloseIcon.click()
    }
}

module.exports = new homePage()