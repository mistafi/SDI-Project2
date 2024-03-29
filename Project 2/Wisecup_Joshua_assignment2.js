// Joshua Wisecup
// SDI 1211
// Saturday, December 1, 2012 
// Assignment - Project 2
// Thanksgiving Holiday Trip Part 2


// My variables

var bigTripPlan = function() {
		
	var say = function(message) {console.log(message); };
	var tripPlan = true;
	var moneyOnHand = 450;
	var checkBankMin = 40;
	var checkWeather = true;
	var driving = true;
	
	var destinations = [ 
		"Denver", 
		"Germantown", 
		"Georgetown" 
	],
		tripDistance = [ 
		1852, 
		125, 
		18 
	],
		fundsNeeded = [ 
		450, 
		120, 
		40 
	];
	var	days = [ 
		"Monday", 
		"Tuesday", 
		"Wednesday", 
		"Thursday", 
		"Friday", 
		"Saturday", 
		"Sunday" 
	],
		tripWeatherConditions = [
		"sunny",
		"cloudy",
		"snowy",
		"sunny",
		"sunny",
		"cloudy",
		"cloudy"
	];

	if (moneyOnHand >= checkBankMin) {
		say("We have $" + moneyOnHand + ".")
				for (var i = 0; i < destinations.length; i++) { 
					if (moneyOnHand >= fundsNeeded[i]) {
						console.log("That will be plenty for a trip to " + destinations[i] + ".")			
					} else {
						console.log("We will not have enough money for a trip to " + destinations[i] + ".");
					};
				}
					if ((moneyOnHand >= fundsNeeded[i]) && (moneyOnHand < fundsNeeded[1])) {
						var d=tripDistance[2]
						console.log("We should go to " + destinations[2] + ". It is " + tripDistance[2] + " miles away.")			
					}
					else if ((moneyOnHand >= fundsNeeded[1]) && (moneyOnHand < fundsNeeded[0])) {
						var d=tripDistance[1]
						console.log("We should go to " + destinations[1] + ". It is " + tripDistance[1] + " miles away.")			
					}
					else if (moneyOnHand >= fundsNeeded[0]) {
						var d=tripDistance[0]
						console.log("We should go to " + destinations[0] + ". It is " + tripDistance[0] + " miles away.")			
					};
	
		if (checkWeather === true) {
			console.log("When would be a good time to leave?");
				for (var i = 0; i < days.length; i++) { 
					if ((tripWeatherConditions[i] == "sunny") && (days[i] == "Friday") || (tripWeatherConditions[i] == "sunny") && (days[i] == "Saturday")) {
						console.log("The weather is " + tripWeatherConditions[i] + " and looks good. We can leave on " + days[i] + ".");
					};
				}
			
		} else {
			console.log("We will have to check the forecast for next week!");
		};


	} else {
		say("We are not taking a trip this year for Thanksgiving.")	
	};
return tripDistance;
}

var ready = function(checkWeather, message) {
	if (checkWeather==true) {
		console.log(message);
	} else {
		console.log("We\'ve got some work to do before we leave.")
	};
	return true;
};

var milesPerGallon = function(totalMiles, milesPerTank, costPerTank) {
	var numberStops;
	numberStops = Math.floor(totalMiles / milesPerTank);
	var costPerStop;
	costPerStop = numberStops * costPerTank;
	if (numberStops > 0) {
		console.log("If our drive is " + totalMiles + " miles, then we will have to stop " + numberStops + " times for gas.");
		console.log("That will cost about $" + costPerStop + " in gas for " + numberStops + " stops.");
	} else {
		console.log("We won't have to fill-up until after we get there.")
	};
	return numberStops;
};

var motivation = function(driving,message, message1, message2) {
	if (driving==true) {
		var traveling = ["I am driving."]
		console.log(message + message1);
	} else {
		console.log(message2)
	};
	return traveling;
};

var milesRemain = function(milesThisTrip, destination) {
	for (var miles = 0; miles < milesThisTrip; miles += 300) {
			var milesRemain = milesThisTrip - miles;
			console.log("We have " + milesRemain + " miles left. We have gone " + miles + " miles.");
	}
	console.log("We made it to " + destination + ".");
	return milesThisTrip;
};

var gasStops = function(destination, numberStops) {
	var stopPoints = ["St. Louis, MO", "Odessa, MO", "Kansas City, MO", "Salina, KS", "Hays, KS", "Burlington, CO"];
		console.log("On our way to " + destination + " we made " + numberStops + " stops.")
		for (var i = 0; i < stopPoints.length; i++) {
				console.log("We stopped at " + stopPoints[i] + ". ")
		}
	console.log("It was a great trip!")
	return stopPoints;
};

// My output

bigTripPlan()

ready(true, "We\'re ready to go.")

milesPerGallon(1852,300,35)

motivation(true, "Now that you've started your trip, stay alert."," Keep up the good work!", "No worries. We\'ll be on the road soon.")

milesRemain(1852,"Denver")

gasStops("Denver", 6)


