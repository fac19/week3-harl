console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");

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

