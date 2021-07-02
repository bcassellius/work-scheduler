document.getElementById("currentDay").innerHTML =
  moment().format("dddd, MMMM do YYYY");

const textArea = document.querySelector("textarea").value;
console.log("line 5", textArea);

// pass the textArea into the tasks array


var timeBlock = document.getElementsByClassName("time-block");
console.log(timeBlock)


var tasks = JSON.parse(localStorage.getItem("tasks"));
console.log("does it pass through tasks?");

function loadTasks() {
  tasks = localStorage.getItem("tasks");
  console.log(savedTasks);
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
}

$(".saveBtn").on("click", saveTask);

function saveTask() {
  console.log($(this).siblings(".description").val());
  console.log ("_____________________________________________________________")
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}


// ----------------TODO------------------
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

for (let i = 0; i < timeBlock.length; i++) {
  // var now = moment()
  var now = moment("12", "h");
  // console.log(now);
  const element = timeBlock[i];
  // console.log(element.id);
  var parse = moment(element.id, "hA");
  console.log(parse.isBefore(now));
  if (parse.isBefore(moment(now, "h"))) {
    // console.log("cats hate dogs");
    element.classList.add("past");
  } else if (parse.isSame(now, "h")) {
    element.classList.add("present");
  } else if (parse.isAfter(now, "h")) {
    element.classList.add("future");
  } else {
    // console.log("none of the above");
  }
}
