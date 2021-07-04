document.getElementById("currentDay").innerHTML =
  moment().format("dddd, MMMM do YYYY");

const tasks = [];
const textArea = document.querySelector("textarea").value;
// console.log("line 5", textArea);

// pass the textArea into the tasks array

var timeBlock = document.getElementsByClassName("time-block");
// console.log(timeBlock)
$(".saveBtn").on("click", saveTask);

function saveTask() {
  tasks.push($(this).siblings(".description").val());
  // console.log ("_____________________________________________________________")
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // console.log(tasks);
}


function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  // console.log("does it pass through tasks?");
  console.log(tasks);
  if (!tasks) {
    savedTasks = [
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
    return false;
  }
  // tasks = JSON.parse(tasks);
  console.log(tasks)
}

// ----------------TODO------------------
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

for (let i = 0; i < timeBlock.length; i++) {
  var now = moment().hour();
  const element = timeBlock[i];
  var parse = moment(element.id, "hA");
  if (parse.isBefore(moment(now, "h"))) {
    element.classList.add("past");
  } else if (parse.isSame(moment(), "hour")) {
    element.classList.add("present");
  } else if (parse.isAfter(now, "h")) {
    element.classList.add("future");
  } else {
    console.log("none of the above");
  }
}
loadTasks();
