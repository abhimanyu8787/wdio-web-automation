const trainDetails = require("../../pojos/makemytrip/train-details")

class railwayListingPage{
    get selectedTrainClass(){
        return $$('(//div[@class="trainSubsChild"])[1]/div')
    }
    get selectedTrainName(){
        return $('(//div[@class="train-name"])[1]')
    }
    get selectedTrainNumber(){
        return $('(//div[@class="flex train-depart-number"])[1]/div')
    }
    get selectedTrainDepartureTime(){
        return $('(//div[@class="depart-time"])[1]')
    }
    get selectedTrainArrivalTime(){
        return $('(//div[@class="arrival-time"])[1]')
    }
    get selectedTrainJourneyDuration(){
        return $('(//span[@class="duration"])[1]')
    }

    async selectCoachClassByIndex(targetindex){
        this.selectedTrainClass.forEach(async (element,index) => {
            if(index==targetindex){
                await element.click()
                return
            }
        });
    }

    async getTrainDetailsObject(){
        return new trainDetails(await this.selectedTrainName.getText(), await this.selectedTrainNumber.getText(), await this.selectedTrainDepartureTime.getText(), await this.selectedTrainArrivalTime.getText(), await this.selectedTrainJourneyDuration.getTex())
    }
}

module.exports = new railwayListingPage()