console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");
const toDoTab = document.getElementById("tabsToDo")
const doneTab = document.getElementById("tabsDone");

doneTab.addEventListener("click", () => {
    toDoList.classList.add("hidden");
    doneList.classList.remove("hidden")
});
toDoTab.addEventListener("click", () => {
  doneList.classList.add("hidden");
  toDoList.classList.remove("hidden")
});


const lowPriority = document.getElementById("priorityLow");
const mediumPriority = document.getElementById("priorityMedium");
const highPriority = document.getElementById("priorityHigh");

const formPriorityRadios = document.querySelectorAll('input[name=priority]');
const form = document.querySelector('.new-task-form');
const formText = document.getElementById("newTaskFormText");

const formSubmit = document.getElementById("formButton")

function addTask(priority, text, checkBox){
    
    // This function clones the card template and inserts it into the
    // task list using the parameters supplied.

    let template = document.getElementById('cardTemplate');
    let newTask = template.content.cloneNode(true)

    let thePriority = newTask.querySelector(".to-do-list__card__priority");
    thePriority.classList.add(priority);
    
    let theText = newTask.querySelector(".to-do-list__card__text");
    theText.textContent = text;
    
    let theStatus = newTask.querySelector(".to-do-list__card__checkbox");

    theStatus.checked = checkBox;

    theStatus.addEventListener("click", () => {
        if(theStatus.checked) {
            doneList.appendChild(newTask);
            toDoList.removeChild(newTask);
        }
    })

    toDoList.appendChild(newTask);
}

formSubmit.addEventListener("click", event => {
    event.preventDefault();
    let selected = [...formPriorityRadios].filter( el => el.checked )[0];
    addTask(selected.value, formText.textContent, false);

})

function addTaskToDone(){
  // If status checked is true
  // Add class done to task
  // Populate done list with done tasks
}
