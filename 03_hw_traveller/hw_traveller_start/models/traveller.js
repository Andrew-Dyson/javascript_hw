const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= 1000
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueJourneys = []

  this.journeys.forEach((journey) => {
    if (uniqueJourneys.includes(journey.transport) = false){
      uniqueJourneys.push(journey.transport)
    }

  })
};
if (1 > 0) {
  console.log("that condition was true")
} else if (1 == 0) {
  console.log("I will log is condition is true")
} else {
  console.log("in all other cases do this")
}

const multiplyBy2 = function(numbers) {
  const result = []

  numbers.forEach((number) => {
      const multiplied = number * 2

      result.push(multiplied)


  })

  return result
}


module.exports = Traveller;
