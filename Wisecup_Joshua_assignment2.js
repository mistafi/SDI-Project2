//alert("JavaScript works!");

// Joshua Wisecup
// SDI 1211
// Saturday, November 24, 2012 
// Assignment - Project 1
// Thanksgiving Holiday Trip

// My variables

var say = function(message) {console.log(message); };

var farFromCel = function (celcius) {
	// F = ((9 / 5) * C) +32
	return ((9 / 5) * celcius) +32
};

var celFromFar = function (fahrenheit) {
	// C = (F - 32) * (5 / 9)
	return (fahrenheit - 32) * (5 / 9)
};

var isLeapYear = function (year) {
	// by 4 - true
	// by 100 - false
	// by 400 - true
	var isDivisibleBy = function (numerator, denominator) {
		var fraction = numerator / denominator;
		if (fraction === Math.floor(fraction)) { return true}
		return false;	
	}
	if (isDivisibleBy(year, 400)) { return true;}
	else if (isDivisibleBy(year, 100)) { return false;}
	else if (isDivisibleBy(year, 4)) { return true;}
	else {return false};

};

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
	roundTrip = [ 
	tripDistance * 2 
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



var getTotalStops = function (t) {
		var tripStops = tripDistance[i] / carMileage;
		console.log(tripStops)
}	

//	var i=0, j=tripDistance.length; i < j; i++;  
// 		console.log(getTotalStops);




// My output

for (var i=0, j=destinations.length; i < j; i++) {
console.log( destinations[i] + " is " + tripDistance[i] + " miles away.");
};

say("I saved myself eight whole characters.")

say("22C = " + farFromCel(22) + "F")

say("71.6F = " + celFromFar(71.6) + "C")

say("2000 is a leap year: " + isLeapYear(2000));  //true
say("1900 is a leap year: " + isLeapYear(1900));  //false
say("2008 is a leap year: " + isLeapYear(2008));  //true
say("2011 is a leap year: " + isLeapYear(2011));  //false


say("We have 1852 miles to travel. We'll have to make " + tripStops + " stops for gas.");  //true




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


