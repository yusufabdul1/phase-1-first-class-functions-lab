const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice (0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(fare){
        return fare*multiplier
    }
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler(fare){
    return fare*3
}

const selectDifferentDrivers = function(drivers, driverFunction){
    return driverFunction(drivers)
}
// Code your solution in this file!
