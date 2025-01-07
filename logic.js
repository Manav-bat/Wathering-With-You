//-------SETUP


// Define the values for firstPerson, firstLocation, secondPerson, and secondLocation
var firstPerson = 'Manav'; // Replace with the actual name
var firstLocation = 'Tokyo ,Japan'; // Replace with the actual location

var secondPerson = 'Prachi'; // Replace with the actual name
var secondLocation = 'Delhi, India';

//name, location, number
var oneLoc = new Location(firstPerson, firstLocation, 'one'); //first person's name as string, location (City, Country) as string

//name, location, number
var twoLoc = new Location(secondPerson, secondLocation, 'two'); //first person's name as string, location (City, Country) as string

//last day of contact (year, month, day)
var timeLeaveStamp = new Date(2025, 05, 01);

//first day of renewed contact (year, month, day)
var timeMeetStamp = new Date(2026, 05, 16);

//earliest and latest time appropirate for call
var earliestCall = 8;
var latestCall = 2;

//-------LOGIC

//location data
oneLoc.loadData();
twoLoc.loadData();
