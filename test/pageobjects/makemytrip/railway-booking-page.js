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
    get datesOnCalendar(){
        return $$('//div[@class="DayPicker-Week"]/div')
    }
    get calendar(){
        return $('//span[@data-cy="travelDatelabel"]/parent::label/parent::div')
    }
    get class(){
        return $('//span[@data-cy="class"]/parent::label/parent::div')
    }
    get classDropdown(){
        return $$('//ul[@class="travelForPopup"]/li')
    }
    get submitButton(){
        return $('//a[@data-cy="submit"]')
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
        await browser.pause(2000)
        await this.calendar.click()
        this.datesOnCalendar.forEach(async element => {
            if(await element.getText()==date){
                await element.click()
                return
            }
        });
        await browser.pause(2000)
        await this.class.click()
        this.classDropdown.forEach(async element => {
            if(await element.getText()==coachClass){
                await element.click()
                return
            }
        })
        await this.submitButton.click()
    }
}

module.exports = new railwayBookingPage()