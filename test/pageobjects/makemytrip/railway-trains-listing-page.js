class railwayListingPage{
    get selectedTrainClass(){
        return $$('(//div[@class="trainSubsChild"])[1]/div')
    }

    async selectCoachClassByIndex(targetindex){
        this.selectedTrainClass.forEach(async (element,index) => {
            if(index==targetindex){
                await element.click()
                return
            }
        });
    }
}

module.exports = new railwayListingPage()