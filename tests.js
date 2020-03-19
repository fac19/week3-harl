console.log("Running tests...");
console.log("Done.");


function clearList(listSelector){
    let theList = document.querySelectorAll(listSelector);
    theList.forEach( elem =>{
        elem.remove();
        }
    );
}


test("Check the function exists", t => {
    addTask("low","Clean the fridge",false);
});

test("Submitting a new task adds something to the list", t => {
    addTask("low","Clean the fridge",false);
    //let toDoList = document.getElementById("toDoList")
    let toDoListLength = document.querySelectorAll(".to-do-list > li").length
    console.log(toDoListLength)
    t.equal (toDoListLength > 0, true)
    clearList(".to-do-list > li");
});

test("Submitting a new task adds the correct template to the list", t => {
    addTask("low","Clean the fridge",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div") !== null;
    let theText = document.querySelector(".to-do-list > li:last-child > p") !== null;
    let theStatus = document.querySelector(".to-do-list > li:last-child > input") !== null;
    t.equal (thePriority && theText && theStatus, true);
    clearList(".to-do-list > li");
});

test("Checking the correct data is added", t => {
    addTask("low","Clean the fridge",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    t.equal(thePriority.classList.contains("low"), true);
    t.equal(theText.textContent, "Clean the fridge");
    t.equal(theStatus.checked, false);
    clearList(".to-do-list > li");
});

test("Checking an entry marks it as complete", t => {
  // test goes here
});

test("Deleting an entry removes it from the list", t => {
    // test goes here
});

test("Toggling the filter hides completed tasks from the list", t => {
    // test goes here
});

test("Selecting a radio button returns a correct value when clicked or selected on keyboard", t => {
  const lowButton = document.getElementById("priorityLow");
  const result = lowButton.value;
  lowButton.click();
  t.equal(result, "low")    
});