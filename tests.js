console.log("Running tests...");
console.log("Done.");

test("Check the function exists", t => {
    addTask("low","Clean the fridge",false);
});

test("Submitting a new task adds something to the list", t => {
    addTask("low","Clean the fridge",false);
    //let toDoList = document.getElementById("toDoList")
    let toDoListLength = document.querySelectorAll(".to-do-list > li").length
    console.log(toDoListLength)
    t.equal (toDoListLength > 0, true)
});

test("Submitting a new task adds the correct template to the list", t => {
    addTask("low","Clean the fridge",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div") !== null;
    let theText = document.querySelector(".to-do-list > li:last-child > p") !== null;
    let theStatus = document.querySelector(".to-do-list > li:last-child > input") !== null;
    t.equal (thePriority && theText && theStatus, true);
});

test("Checking the correct data is added", t => {
    addTask("low","Clean the fridge",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    t.equal(thePriority.classList.contains("low"), true);
    t.equal(theText.textContent, "Clean the fridge");
    t.equal(theStatus.checked, true)

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