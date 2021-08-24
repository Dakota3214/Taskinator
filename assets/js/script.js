var buttonE1 = document.querySelector("#save-task");
// console.log(buttonE1);
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task."
    tasksToDoEl.appendChild(listItemEl);
} 

buttonE1.addEventListener("click", createTaskHandler);


// var btn = document.querySelector("#save-task");
// console.dir(btn);