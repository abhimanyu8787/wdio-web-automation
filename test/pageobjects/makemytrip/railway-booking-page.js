class railwayBookingPage{
    get fromLocation(){
        return $('//span[@data-cy="fromCityLabel"]')
    }
    get toLocation(){
        return $('//span[@data-cy="toCityLabel"]')
    }
    get fromTextBox(){
        return $('//input[@placeholder="From"]')
    }
    get toTextBox(){
        return $('//input[@placeholder="To"]')
    }
    get suggestion(){
        return $('//li[@class="react-autosuggest__suggestion react-autosuggest__suggestion--first"]')
    }

    async enterJourneyDetails(from, to, date, coachClass){
        await this.fromLocation.click()
        await this.fromTextBox.setValue(from)
        await browser.pause(2000)
        await this.suggestion.click()
        await this.toLocation.click()
        await this.toTextBox.setValue(to)
        await browser.pause(2000)
        await this.suggestion.click()
    }
}

module.exports = new railwayBookingPage()