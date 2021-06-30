
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// ----------------TODO------------------

// display date at the top of calendar -------- document.getElementById("currentDay").innerHTML
//     format("dddd, MMMM do YYYY")

// create an empty object to place tasks
//     var tasks = {}

// add time blocks ----------- bootstrap grid
//     30min time slots - type task - save button



// add save buttons to grid ----------------- localStorage
//     JSON.stringify()  (puts object into an array) 
//     {
//         time:
//         event:
//     }

// color coded time blocks ------------ moment
//     moment().isBefore(Moment|String|Number|Date|Array);  ------- gray
//     moment().isSame(Moment|String|Number|Date|Array);  --------  red
//     moment().isAfter(Moment|String|Number|Date|Array);  --------- green
// time block allows click and event -------------------- addEventListener

// Persistance
//     JSON.parse(localStorage.getItem("tasks"))
//     if nothing in localStorage, create a new object to track all "tasks" arrays



