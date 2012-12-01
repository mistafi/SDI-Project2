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
	var moneyOnHand = 120;
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
		300, 
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
	
} else {
	say("We are not taking a trip this year for Thanksgiving.")	
};


}


bigTripPlan()


// step 1: procedure function prepare(m) m=moneyOnHand
//	are we going to take a trip? must have more than 40 dollars
//
//console.log(We have enough money to take a trip for Thanksgiving. Where do you want to go?)
//
// a. choose a destination
// if 40 or more, but less than 120, go to georgetown
//
//console.log(We have enough funds. I think we should go to Georgetown.)
//
// if 120 or more, but less than 300, go to germantown
//
//console.log(We have enough funds. I think we should go to germantown.)
//
//if 300 or more, go to denver
//
//console.log(We have enough funds. I think we should go to denver.)
//
//b. check the weather
// if weather is good, leave on friday
// if weather is bad, leave on saturday

// if not enough money, then no trip this year


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
