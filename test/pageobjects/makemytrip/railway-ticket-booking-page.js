class railwayTicketBooking{

    get refundOption(){
        return $$('//input[@type="radio" and @name="fc"]')
    }
    get addPassangerDetails(){
        return $('//span[text()="Add Traveller"]')
    }
    get travellerName(){
        return $('//input[@id="name"]')
    }
    get travellerAge(){
        return $('//input[@id="age"]')
    }
    get travellerSexBox(){
        return $('(//div[@tabindex="0"])[3]')
    }
    get travellerSexOptions(){
        return $$('//span[@class="appendRight30"]/parent::li')
    }
    get travellerBerthPreferenceBox(){
        return $('(//div[@tabindex="0"])[5]')
    }
    get travellerBerthPreferenceOptions(){
        return $$('(//div[@tabindex="0"])[5]/ul/li/span')
    }
    get addButton(){
        return $('//button[text()="Add"]')
    }
    get emailIdField(){
        return $('//input[@id="contactEmail"]')
    }
    get mobileNumberField(){
        return $('//input[@id="mobileNumber"]')
    }
    get pincodeField(){
        return $('//input[@id="pincode_gst_info"]')
    }
    get stateField(){
        return $('//input[@id="dt_state_gst_info"]')
    }
    get stateOptions(){
        return $$('//input[@id="dt_state_gst_info"]/parent::div/following-sibling::ul/li')
    }
    get addressField(){
        return $('//input[@id="address_gst_info"]')
    }

    async selectRefundOptionByIndex(targetIndex){
        this.refundOption.forEach(async (element, index) => {
            if(index == targetIndex){
                await element.click();
            }
        });
    }

    async enterPassengerDetails(name, age, gender, nationality, berthPreference, reservationType){
        await this.addPassangerDetails.scrollIntoView()
        await this.addPassangerDetails.click()
        await this.travellerName.setValue(name)
        await this.travellerAge.setValue(age)
        await this.travellerSexBox.click()
        if(gender=='Male'){await this.travellerSexOptions[0].click()}
        else{await this.travellerSexOptions[1].click()}
        await this.travellerBerthPreferenceBox.click()
        this.travellerBerthPreferenceOptions.forEach( async element => {
            if(await element.getText()==berthPreference){
                await element.click();
                return
            }
        })
        await this.addButton.click()
    }

    async enterPassengerContactInformation(email, phone, pincode, state, address){
        await this.emailIdField.setValue(email)
        await this.mobileNumberField.setValue(phone)
        await this.pincodeField.setValue(pincode)
        await this.stateField.click()
        await this.stateOptions.forEach(async element => {
            if(await element.getText()==state){
                await element.click()
                return
            }
        });
        await this.addressField.setValue(address)
    }

}

module.exports = new railwayTicketBooking()