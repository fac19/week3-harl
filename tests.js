function clearList(listSelector){
    let theList = document.querySelectorAll(listSelector);
    theList.forEach( elem => elem.remove());
}

test("Check the function exists", t => {
    addTask("low","Clean the fridge 1",false);
});

test("Submitting a new task adds something to the list", t => {
    addTask("low","Clean the fridge 2",false);
    let toDoListLength = document.querySelectorAll(".to-do-list > li").length
    t.equal (toDoListLength > 0, true)
    clearList(".to-do-list > li");
});

test("Submitting a new task adds the correct template to the list", t => {
    addTask("low","Clean the fridge 3",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div") !== null;
    let theText = document.querySelector(".to-do-list > li:last-child > p") !== null;
    let theStatus = document.querySelector(".to-do-list > li:last-child > input") !== null;
    t.equal (thePriority && theText && theStatus, true);
    clearList(".to-do-list > li");
});

test("Checking the correct data is added", t => {
    addTask("low","Clean the fridge 4",false);
    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    t.equal(thePriority.classList.contains("low"), true);
    t.equal(theText.textContent, "Clean the fridge 4");
    t.equal(theStatus.checked, false);
    clearList(".to-do-list > li");
});

test("Clicking save to submit the new task form adds a task to the to-do list", t => {

    // Populate the form and submit it
    highPriority.click();
    formText.value = "submit integration test.";
    formSubmit.click();

    // Check it's now a task the to-do list
    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    t.equal(thePriority.classList.contains("high"), true);
    t.equal(theText.textContent, "submit integration test.");
    t.equal(theStatus.checked, false);

    // Clean up
    clearList(".to-do-list > li");
    formText.value = "";

    // Note that before the handler exists this throws the site into an infinite loop!!!

});

test("Clicking on the text of a task in the todo list copies the data back into the form and deletes the task from the list.", t => {

    // Populate the form
    mediumPriority.click();
    formText.value = "Testing edit now.";
    formSubmit.click();

    // Check that data made it into a task in the todo list
    let thePriority = document.querySelector(".to-do-list > li:last-child > div");
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");
    t.equal(thePriority.classList.contains("medium"), true);
    t.equal(theText.textContent, "Testing edit now.");
    t.equal(theStatus.checked, false);
    
    // Clear the data from the form and verify it has gone
    formText.value = "";
    lowPriority.click();
    t.equal(formText.value, "");
    let selected = (getSelectedRadioNode)();
    t.equal(selected.value, "low");
    
    // Find the task in the to do list and click on its text area
    theText.click();

    // Verify the data is in the form
    t.equal(formText.value, "Testing edit now.");
    selected = getSelectedRadioNode();
    t.equal(selected.value, "medium");

    formText.value = "";
    
});

test("Checking and entry moves an item to the done list.", t => {

    // Create a task in the todo list
    highPriority.click();
    formText.value = "Checking and entry moves an item to the done list.";
    formSubmit.click();
    let theStatus = document.querySelector(".to-do-list > li:last-child > input");

    // Check the checkbox
    theStatus.click()

    // Check it's been moved to the done list
    let theText = document.querySelector(".done-list > li:last-child > p");
    let thePriority = document.querySelector(".done-list > li:last-child > div");
    t.equal(thePriority.classList.contains("high"), true);
    t.equal(theText.textContent, "Checking and entry moves an item to the done list.");
    clearList(".to-do-list > li");
    clearList(".done-list > li");
    formText.value = "";

});

test("Toggling the filter hides completed tasks from the list", t => {
    doneTab.click();
    const result = doneTab.classList.contains("hidden")
    t.equal(result, false)
    toDoTab.click()
});

test("Radio buttons respond to mouse clicks (and getSelectedRadioNode function works okay)", t => {

    let selected;

    highPriority.click();
    selected = getSelectedRadioNode();
    t.notEqual(selected.value, "low");
    t.notEqual(selected.value, "medium");
    t.equal(selected.value, "high");

    mediumPriority.click();
    selected = getSelectedRadioNode();
    t.notEqual(selected.value, "low");
    t.equal(selected.value, "medium");
    t.notEqual(selected.value, "high");

    lowPriority.click();
    selected = getSelectedRadioNode();
    t.equal(selected.value, "low");
    t.notEqual(selected.value, "medium");
    t.notEqual(selected.value, "high");

});

test("Clicking delete deletes an entry", t => {

    // Create a task
    addTask("low","I am to be deleted.",false);
    let toDoListLength = document.querySelectorAll(".to-do-list > li").length
    t.equal(toDoListLength === 1, true)

    // Click on the item to get into edit mode
    let theText = document.querySelector(".to-do-list > li:last-child > p");
    theText.click();

    // Click delete and make sure it's gone
    formDelete.click();
    toDoListLength = document.querySelectorAll(".to-do-list > li").length
    t.equal(toDoListLength === 0, true)
    
    // Clean up
    clearList(".to-do-list > li");
    formText.value = "";
    
    // Note that before the handler exists this throws the site into an infinite loop!!!
});

test("Clicking add (newTaskButton) clears the form", t => {
    
    // Populate the form
    mediumPriority.click();
    formText.value = "Clicking add clears the form.";
    
    // Click the add button
    newTaskButton.click();
    
    // Check the form has been cleared
    t.equal(formText.value, "");
    t.equal(getSelectedRadioNode().value, "low");

});

newTaskForm.style.display = "none";
