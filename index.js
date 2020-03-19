console.log("Running main app javascript.");
console.log("Done.");
let nodeID = 0;
const getNewID = _ => { nodeID++; return nodeID; }

const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");
const toDoTab = document.getElementById("tabsToDo")
const doneTab = document.getElementById("tabsDone");

// doneTab.addEventListener("click", () => {
//     toDoList.classList.add("hidden");
//     doneList.classList.remove("hidden")
// });
// toDoTab.addEventListener("click", () => {
//   doneList.classList.add("hidden");
//   toDoList.classList.remove("hidden")
// });


const lowPriority = document.getElementById("priorityLow");
const mediumPriority = document.getElementById("priorityMedium");
const highPriority = document.getElementById("priorityHigh");

const formPriorityRadios = document.querySelectorAll('input[name=priority]');
const form = document.querySelector('.new-task-form');
const formText = document.getElementById("newTaskFormText");

const formSubmit = document.getElementById("formButton")

function addTask(priority, text, checkBox){
    
    console.log("PRIORITY:", priority);
    console.log("TEXT:", text);

    // This function clones the card template and inserts it into the
    // task list using the parameters supplied.

    let template = document.getElementById('cardTemplate');
    let newTask = template.content.cloneNode(true);
    let theLi = newTask.querySelector(".to-do-list__card");
    let taskID = "task"+getNewID();
    theLi.id = taskID;
    
    let thePriority = newTask.querySelector(".to-do-list__card__priority");
    thePriority.classList.add(priority);
    // thePriority.id = "task"+getNewID();
    
    let theText = newTask.querySelector(".to-do-list__card__text");
    theText.textContent = text;
    theText.addEventListener("click", e => {

        // Put fields in edit form
        console.log("TEXTBOX Event handler fired.", e);
        theNode = getAncestorIfItHasClass(e.target, "to-do-list__card")
        formText.value = theNode.querySelector(".to-do-list__card__text").textContent
        
        // Delete entry from list
        theNode.remove();

        // Trigger UI change i.e. hide list and show edit form.
    })
    
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
    let text = formText.value;
    let selected = [...formPriorityRadios].filter( el => el.checked )[0];
    addTask(selected.value, text, false);
})

function getAncestorIfItHasClass(elem, className){
    // recursively check up the family tree for specific className
    console.log(elem);
    if(elem.classList.contains(className)) return elem;
    if(elem.parentElement) return getAncestorIfItHasClass(elem.parentElement, className);
    return false;
}


