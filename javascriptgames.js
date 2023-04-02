
function goback(){
	window.history.back();
	console.log("We are in the p page");
}

function scrollToTop(x,y){
	window.scrollTo(x,y);
}

 /*Calendar*/
// Return true if the given year is a leap year
function isLeapYear(year) {
return ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
}
// Return the number of days in the given month (1-12) of the year (xxxx)
function getDaysInMonth(year, month) {
if (month === 2) {
if (isLeapYear(year)) {
return 29;
} else {
return 28;
}
} else if ((month === 1) || (month === 3) || (month === 5) || (month === 7)
|| (month === 8) || (month === 10) || (month === 12)) {
return 31;
} else {
return 30;
}
}
// Get the day of the week given year, month (1-12) and day (1-31)
function getDayInWeek(year, month, day) {
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
var theDate = new Date(year, month-1, day);
return weekdays[theDate.getDay()];
}


 window.onload = init;
// Global variables
// Today's year, month(0-11) and day(1-31)
var thisYear, thisMonth, thisDay;
// The "onload" handler, run after the page is fully loaded.
function init() {
setToday();
document.getElementById("selMonth").onchange = setMonth;
document.getElementById("tfYear").onchange = setYear;
document.getElementById("btnToday").onclick = setToday;
document.getElementById("frmCalendar").onsubmit = function() {
return false; // Stay in current page, do not refresh.
}
}
// Set thisYear, thisMonth, thisDay to Today
// So that we can highlight today on the calendar
function setToday() {
var now = new Date(); // today
thisDay = now.getDate(); // 1-31
thisMonth = now.getMonth(); // 0-11
thisYear = now.getFullYear(); // 4-digit year
document.getElementById("selMonth").selectedIndex = thisMonth;
document.getElementById("tfYear").value = thisYear;
printCalendar(thisYear, thisMonth);
}
// Print the month-calendar for the given 4-digit year and month (0-11)
function printCalendar(year, month) {
var daysInMonth = getDaysInMonth(year, month + 1); // number of days
var firstDayOfMonth = (new Date(year, month, 1)).getDay(); // 0-6 for Sun to Sat
var tableInnerHTML = "<tr><th class='sunday'>Sun</th><th>Mon</th><th>Tue</th>"
+ "<th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
var tdCellCount = 0; // count of table's <td> cells
if (firstDayOfMonth !== 0) { // Leave these cells blank
tableInnerHTML += "<tr><td colspan='" + firstDayOfMonth + "'></td>";
tdCellCount = firstDayOfMonth;
}
for (var day = 1; day <= daysInMonth; day++) {
if (tdCellCount % 7 === 0) { // new table row
tableInnerHTML += "<tr>";
}
// Use different style classes for today, sunday and other days
if ((day === thisDay) && (month === thisMonth) && (year === thisYear)) {
tableInnerHTML += "<td class='today'>" + day + "</td>";
} else if (tdCellCount % 7 === 0) {
tableInnerHTML += "<td class='sunday'>" + day + "</td>";
} else {
tableInnerHTML += "<td>" + day + "</td>";
}
tdCellCount++;
if (tdCellCount % 7 === 0) {

tableInnerHTML += "</tr>";
}
}
// print the remaining cells and close the row
var remainingCells = 7 - tdCellCount % 7;
if (remainingCells < 7) {
tableInnerHTML += "<td colspan='" + remainingCells + "'></td></tr>";
}
document.getElementById("tableCalendar").innerHTML = tableInnerHTML;
}
// The onchange handler for the month selection
function setMonth() {
var year = document.getElementById("tfYear").value;
var month = document.getElementById("selMonth").selectedIndex;
printCalendar(year, month);
}
// The onchange handler for the year textfield
function setYear() {
var year = document.getElementById("tfYear").value;
var month = document.getElementById("selMonth").selectedIndex;
if (isValidYear(year)) {
printCalendar(year, month);
}
}
// Validate the year
function isValidYear(year) {
if (year < 1 || year > 9999) {
alert ("Sorry, the year must be between 1 and 9999.");
document.getElementById("tfYear").focus();
return false;
} else {
return true;
}
}
