console.log("Running tests...");
console.log("Done.");

test("Check the function exists", t => {
    addTask("low","Clean the fridge",false);
});

test("Submitting a new task adds it to the list", t => {
    addTask("low","Clean the fridge",false);
    //let toDoList = document.getElementById("toDoList")
    let toDoListLength = document.querySelectorAll(".to-do-list > li").length
    console.log(toDoListLength)
    t.equal (toDoListLength > 0, true)
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