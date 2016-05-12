
// Our first challenge is to display the current day, month and year in an HTML string, like this:
// <p>Today is <span id="todayDate">Oct. 6, 2015</span></p>

// 1. To begin, we need a variable to reference the current time when a user loads the page.
// Create a variable "today" as an instance of the Date object.

var today = new Date();

// 2. Next we need the values for the current day, month and year.

var currentDay = today.getDate();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

// 3. As we saw in class, Date.getMonth(); returns a number. We want a three-letter abbreviation for the month.
// Maybe we can get that from the Date object, but let's just make our own array and use the data we already have.
// Create a month names array using the new keyword and the Array() prototype object.
// Populate the array with three-letter string abbreviations for each month.

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var month = months[currentMonth];


// 4. Now we have everything we need to create our HTML string. Use jQuery's .html() method.

$("#todayDate").html(month + " " + currentDay + ", " + currentYear);
