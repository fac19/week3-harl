const toDoList = document.getElementById("toDoList");
const doneList = document.getElementById("doneList");
const toDoTab = document.getElementById("tabsToDo")
const doneTab = document.getElementById("tabsDone");
const lowPriority = document.getElementById("priorityLow");
const mediumPriority = document.getElementById("priorityMedium");
const highPriority = document.getElementById("priorityHigh");
const formPriorityRadios = document.querySelectorAll('input[name=priority]');
const form = document.querySelector('.new-task-form');
const formText = document.getElementById("newTaskFormText");
const formSubmit = document.getElementById("formButton");
const formDelete = document.getElementById("formDelete");
const newTaskButton = document.getElementById("newTaskButton");

// Switch to done tab
doneTab.addEventListener("click", () => {
    toDoList.classList.add("hidden");
    doneList.classList.remove("hidden")
});
// Switch to 
toDoTab.addEventListener("click", () => {
  doneList.classList.add("hidden");
  toDoList.classList.remove("hidden")
});

function addTask(priority, text, checkBox){
    
    // This function clones the card template and inserts it into the
    // task list using the parameters supplied.
    let template = document.getElementById('cardTemplate');
    let newTask = template.content.cloneNode(true);
    let thePriority = newTask.querySelector(".to-do-list__card__priority");
    thePriority.classList.add(priority);
    let theText = newTask.querySelector(".to-do-list__card__text");
    theText.textContent = text;
    let theStatus = newTask.querySelector(".to-do-list__card__checkbox");
    theStatus.checked = checkBox;
    
    // If user clicks on the text it should re-open in the edit window
    theText.addEventListener("click", editHandler);

    // If user checks the checkbox the task is moved to the done list
    theStatus.addEventListener("click", checkboxHandler);

    toDoList.appendChild(newTask);
}

formSubmit.addEventListener("click", event => {
    // On save buttom clicked marshall the form fields and pass them to addTask
    event.preventDefault();
    let text = formText.value;
    let selected = getSelectedRadioNode().value;
    addTask(selected, text, false);
})

formDelete.addEventListener("click", event => {
    event.preventDefault();
    // Event is already deleted by the time the form is shown so we do nothing
    // Apart from maybe trigger a UI change e.g. hide form, show list again.
})

newTaskButton.addEventListener("click", event => {
    // Clear form
    formText.value = "";
    lowPriority.click();
    // TODO Hide list, switch to form and focus textarea
    formText.focus();
})

function getAncestorIfItHasClass(elem, className){
    // recursively check up the family tree for specific className and return that node
    if(elem.classList.contains(className)) return elem;
    if(elem.parentElement) return getAncestorIfItHasClass(elem.parentElement, className);
}

function getSelectedRadioNode() {
    return [...formPriorityRadios].filter( el => el.checked )[0];
}

function editHandler(event){
    // When edit has been clicked copy task data back into the form and remove from todo
    theNode = getAncestorIfItHasClass(event.target, "to-do-list__card");
    formText.value = theNode.querySelector(".to-do-list__card__text").textContent
    theNode.remove(); // To prevent dupes it is removed from the to-do list
    // Trigger UI change i.e. hide list and show edit form.
}

function checkboxHandler(event){
    // if(theStatus.checked) {
    //     doneList.appendChild(newTask);
    //     toDoList.removeChild(newTask);
    // }
    origNode = getAncestorIfItHasClass(event.target, "to-do-list__card")
    let newNode = origNode.cloneNode(true);
    newNode.querySelector(".to-do-list__card__checkbox").addEventListener("click", checkboxHandler);
    event.target.checked ? doneList.appendChild(newNode) : toDoList.appendChild(newNode);
    origNode.remove();
}