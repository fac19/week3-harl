console.log("Running tests...");
console.log("Done.");

test("Submitting a new task adds it to the list", t => {
    // test goes here
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