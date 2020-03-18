console.log("Running main app javascript.");
console.log("Done.");

const toDoList = document.getElementById("toDoList");

function addTask(priority, text, status){
    let elem = document.createElement("li");
    elem.innerHTML = "A LIST ITEM!!!";   
    toDoList.appendChild(elem);
}