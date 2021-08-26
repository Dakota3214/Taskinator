var formE1 = document.querySelector("#task-form");
// console.log(buttonE1);
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // listItemEl.textContent = taskNameInput;


   
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "taks-info";


    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);


    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
} 

formE1.addEventListener("submit", createTaskHandler);


// var btn = document.querySelector("#save-task");
// console.dir(btn);