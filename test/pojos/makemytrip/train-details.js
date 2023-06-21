class trainDetails{
    constructor(trainName, trainNumber, departureTime, arrivalTime, journeyDuration, ){
        this._trainName = trainName
        this._trainNumber = trainNumber
        this._departureTime = departureTime
        this._arrivalTime = arrivalTime
        this._journeyDuration = journeyDuration
    }

    get trainName(){
        return this._trainName;
    }
    get trainNumber(){
        return this._trainNumber
    }
    get departureTime(){
        return this._departureTime
    }
    get arrivalTime(){
        return this._arrivalTime
    }
    get journeyDuration(){
        return this._journeyDuration
    }
}

module.exports = new trainDetails()