console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");

function addTask(priority, text, status){
    // let elem = document.createElement("li");
    // elem.innerHTML = "A LIST ITEM!!!";   
    // toDoList.appendChild(elem);

    let tmpl = document.getElementById('cardTemplate');
    toDoList.appendChild(tmpl.content.cloneNode(true));

    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    thePriority.classList.add(priority);

    let theText = document.querySelector(".to-do-list > li:last-child > p");
    theText.textContent = text;

    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    theStatus.checked = true;
}

