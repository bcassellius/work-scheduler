document.getElementById("currentDay").innerHTML =
  moment().format("dddd, MMMM do YYYY");

var tasks = JSON.parse(localStorage.getItem("tasks"));

if (!tasks) {
  tasks = [
    {
      time: "8a",
      task: "",
    },
    {
      time: "9a",
      task: "",
    },
    {
      time: "10a",
      task: "",
    },
    {
      time: "11a",
      task: "",
    },
    {
      time: "12p",
      task: "",
    },
    {
      time: "1p",
      task: "",
    },
    {
      time: "2p",
      task: "",
    },
    {
      time: "3p",
      task: "",
    },
    {
      time: "4p",
      task: "",
    },
    {
      time: "5p",
      task: "",
    },
  ];
}

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// ----------------TODO------------------

// time block allows click and event -------------------- addEventListener
var $now = document.getElementsByClassName(".row");
var $hour = document.getElementsByClassName("div.hour");
console.log(moment().isBefore("hour"));

var timeBlock = document.getElementsByClassName("time-block");
console.log(timeBlock);

for (let i = 0; i < timeBlock.length; i++) {
  // var now = moment()
  var now = moment("12", "h");
  console.log(now);
  const element = timeBlock[i];
  console.log(element.id);
  var parse = moment(element.id, "hA");
  console.log(parse.isBefore(now));
  if (parse.isBefore(moment("12", "h"))) {
    console.log("cats hate dogs");
    element.classList.add("past");
  } else if (parse.isSame(now, "hour")) {
    element.classList.add("present");
  } else if (parse.isAfter(now)) {
    element.classList.add("future");
  } else {
    console.log("none of the above");
  }
}

$(".saveBtn").on("click", saveTask);

function saveTask() {
  console.log($(this).siblings(".description").val());

  localStorage.setItem("tasks", JSON.stringify($(this) , tasks));
  console.log(tasks);
  console.log("ice cream");
}

// $(".description").on("blur", "textarea", function(){
//   // recreate p element
//   var taskP = $("<p>")
// },
// add save buttons to grid ----------------- localStorage
//     JSON.stringify()  (puts object into an array)
//     {
//         time:
//         event:
//     }

// Persistance
//     JSON.parse(localStorage.getItem("tasks"))
//     if nothing in localStorage, create a new object to track all "tasks" arrays
