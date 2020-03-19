console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");
const toDoTab = document.getElementById("tabsToDo")
const doneTab = document.getElementById("tabsDone");

doneTab.addEventListener("click", toggleLists(toDoList, doneList));
toDoTab.addEventListener("click", toggleLists(doneList, toDoList));

function toggleLists(a, b){
    a.classList.add("hidden");
    b.classList.remove("hidden")
}

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


