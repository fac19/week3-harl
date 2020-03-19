console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");

const lowPriority = document.getElementById("priorityLow");
const mediumPriority = document.getElementById("priorityMedium");
const highPriority = document.getElementById("priorityHigh");

const formPriority = document.querySelector('input[checked=true]');
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
    theStatus.addEventListener("click", () => {
        if(theStatus.checked) {
            doneList.appendChild(newTask);
            toDoList.removeChild(newTask);
        }
    })
    theStatus.checked = checkBox;

    toDoList.appendChild(newTask);
}

formSubmit.addEventListener("click", event => {
    console.log("EVENT:", event);
    event.preventDefault();
    console.log("FORMTEXT", formText.value);
    console.log("FORMPRIORITY:", formPriority);
    addTask(formPriority.value, formText.textContent, false);

})

