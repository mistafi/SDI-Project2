// Joshua Wisecup
// SDI 1211
// Saturday, November 24, 2012 
// Assignment - Project 1
// Thanksgiving Holiday Trip

// My variables

var say = function(message) {console.log(message); };

var tripPlan = true;
var moneyforDenver = 300;
var moneyforOhio = 100;
var moneyOnHand = 50*7;
var trip1 = "Denver";
var trip2 = "Ohio";
var checkWeather = true;
var weather = "beautiful";
var bigWeather = (escape("Can you believe this great weather?"));
var day1 = "Friday"
var day2 = "Saturday"
var driving = true;
var numOfDays = 1;
var travelDays = numOfDays+0;
var amTired = true;
var howTired = 7;
	

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










// My output

function prepare (fundsneeded, destinations, tripWeatherConditions, tripDistance) {
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
],
	carMileage = [ 
	300 
],
	tripTemps = [ 
	50, 
	45, 
	43 
],
	tripWeatherConditions = [
	"sunny",
	"cloudy",
	"snowy"
],
	weatherConditions = [ 
	"sunny", 
	"cloudy", 
	"rainy", 
	"snowy", 
	"foggy" 
],
	days = [ 
	"Monday", 
	"Tuesday", 
	"Wednesday", 
	"Thursday", 
	"Friday", 
	"Saturday", 
	"Sunday" 
];
	for (var i = 0; i < destinations.length; i++) { 
		console.log(destinations[i] + " is " + tripDistance[i] + " miles away.")
	};
	return destinations;
}

prepare()


if ((tripPlan === true) && (moneyOnHand >= "100")) {
		console.log("Where are we going for Thanksgiving this year, " + destinations[0] + ", " + destinations[1] + ", or " + destinations[2] + "?");
	if (moneyOnHand >= "100") {
		console.log("First, do we have enough money for our trip?");
			if ((moneyOnHand >= moneyforDenver) && (moneyOnHand >= moneyforOhio)) {
				console.log("We have $" + moneyOnHand + ". That will be plenty for our trip to " + trip1 + ".");
			} else {
				console.log("We have $" + moneyOnHand + ". That will not be enough for a trip to " + trip1 + ", but we can make a trip to " + trip2 + ".");
			};
	} else {
		console.log("We will not have enough money for a trip.");
	};
	if (checkWeather === true) {
			console.log("When would be a good time to leave?");
				if (weather === "beautiful") {
					console.log("The weather looks good. We can leave on " + day1 + ".");
					console.log(bigWeather);
				} else {
					console.log("There is a possible storm. We will have to wait and leave on " + day2 + ".");
				};
	} else {
		console.log("We cannot plan our trip without checking the forecast first!");
	};
	if ((driving === true) && (checkWeather === true)) {
		console.log("We can make this trip in a day if we drive straight through, so let\'s get going.");
			if ((numOfDays = 1) && (amTired === true) && (howTired >= 9) || (travelDays > 1)){
				console.log("We\'ve been driving for awhile, and I\'m tired. We should get a hotel room.");
			} else {
				console.log("I\'m not really that tired of driving yet, so we can finish our trip today.");
			};
			if ((howTired >= 9) || (travelDays > 1)){
				console.log("We will rest up, and finish our trip tomorrow.");
			} else {
				console.log("We have arrived at our destination.");
			};
	} else {
		console.log("We need to get on the road if we\'re going to make it!");
	};
} else {
	console.log("We don\'t have enough money. Maybe we\'ll travel next year.");
};


