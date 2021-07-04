document.getElementById("currentDay").innerHTML =
moment().format("dddd, MMMM do YYYY");

var timeBlock = document.getElementsByClassName("time-block");
let tasks = JSON.parse(localStorage.getItem("tasks"));
const textArea = document.querySelector("textarea").value;


for (let i = 0; i < timeBlock.length; i++) {
    var now = moment().hour();
    console.log(now)
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
  
$(".saveBtn").on("click", saveTask);
console.log("please work")
function saveTask(){
        const key = $(this).parent().attr('id')
        const value = document.querySelector("textarea").value;    
        tasks = {...tasks, [key]: value}
        console.log(tasks)
        localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks)
    localStorage.getItem("tasks", JSON.stringify(tasks));
    if (!tasks){
        const key = $(this).parent().attr('id')
        const value = "";    
        tasks = {...tasks, [key]: value}
    } 
}
console.log("first things first")
  loadTasks();