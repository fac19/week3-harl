console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");
const toDoTab = document.getElementById("tabsTodo")
const doneTab = document.getElementById("tabsDone");

toDoList.addEventListener("click", toggleLists);
doneTab.addEventListener("click", toggleLists);

function addTask(priority, text, status){
    
    // This function clones the card template and inserts it into the
    // task list using the parameters supplied.

    let template = document.getElementById('cardTemplate');
    let newTask = template.content.cloneNode(true)

    let thePriority = newTask.querySelector(".to-do-list__card__priority");
    thePriority.classList.add(priority);
    
    let theText = newTask.querySelector(".to-do-list__card__text");
    theText.textContent = text;
    
    let theStatus = newTask.querySelector(".to-do-list__card__checkbox");
    theStatus.checked = false;

    toDoList.appendChild(newTask);
}

function addTaskToDone(){
  // If status checked is true
  // Add class done to task
  // Populate done list with done tasks
}

function toggleLists(){
  //Apply toggle to tab buttons to display tasks in lists
  //When user clicks to do tab, apply hidden class to done items
  //Else if user clicks done tab, apply hidden class to do items
}