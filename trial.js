document.getElementById("currentDay").innerHTML =
moment().format("dddd, MMMM do YYYY");

var timeBlock = document.getElementsByClassName("time-block");
let tasks = JSON.parse(localStorage.getItem("tasks"));
const textArea = document.querySelector("textarea").value;


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
  
$(".saveBtn").on("click", saveTask);
function saveTask(){
        const key = $(this).parent().attr('id')
        const value = $(this).siblings(".description").val();    
        const updatedTasks = {...tasks, [key]: value}
        tasks = updatedTasks
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log(updatedTasks)
}

function loadTasks(){
    const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
    // const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(updatedTasks)
    if (!tasks){
        const key = $(this).parent().attr('id')
        const value = $(this).siblings(".description").val();    
        tasks = {...tasks, [key]: value}
    } 
}
console.log("first things first")
  loadTasks();