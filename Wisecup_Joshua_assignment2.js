// Joshua Wisecup
// SDI 1211
// Saturday, November 24, 2012 
// Assignment - Project 1
// Thanksgiving Holiday Trip


// My output

var bigTripPlan = function() {
	
	// My variables
	
	var say = function(message) {console.log(message); };
	var tripPlan = true;
	var moneyOnHand = 450;
	var checkBankMin = 40;
	var checkWeather = true;
	var driving = true;
	var numOfDays = 1;
	var travelDays = numOfDays+0;
	var amTired = true;
	var howTired = 7;
	
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
	var	carMileage = [ 
		300 
	];
	var weatherConditions = [ 
		"sunny", 
		"cloudy", 
		"rainy", 
		"snowy", 
		"foggy" 
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
		tripTemps = [ 
		50, 
		45, 
		43,
		52,
		60,
		55,
		62 
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
};

bigTripPlan()

ready(true, "We\'re ready to go.")

milesPerGallon(1852,300,35)

motivation(true, "Now that you've started your trip, stay alert."," Keep up the good work!", "No worries. We'll be on the road soon.")

milesRemain(1852,"Denver")



// declare global variable tripProgress = onTheRoadfunction (readytogo , d) d=distance of the trip
//step 2: are we making a trip, did we check the weather function ready(taketrip, weatherCheck)
//
//if we are taking a trip and the weather is checked
//
//console.log(We're ready, and on our way!)
//
// else console.log (we're not quite ready yet.)
//
// return readyToGo


//declare global variable to hold d/ mpt howManyStops = myfunction(d,mpt) --- maybe

//step 3: are we making a trip, boolean, function ( d, mpt ) d=distance to destination, mpt=miles per tank of gas
// if we are driving, d / mpt
// console.log("we are going to have to stop" +  + "times for gas.")
// return howManyStops



//tripProgress ()

//if this is true, then count progress in increments of 300
// while (tripDistance > 0) { var tripTravelled = tripDistance += 300, var tripRemaining = tripDistance - tripTravelled; };
//console.log(tripdistance + " miles, x amount to go. Don't forget to get gas.")
// tripDistance += 300;
//console.log (We have arrived.)

//else (tripTravelled = 0) { console.log (it looks like we haven't gone anywhere.)}

//return value to pass below


//step 4 string function myvariable = myfunction (string 1, string 2) { if value from above is true console.log(string1 + stuff + string 2 +)};


//step 5 array function



//myfunction (string 1, string 2)
