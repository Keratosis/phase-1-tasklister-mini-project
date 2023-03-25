document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", (e) => {
    // prevent default form submission behavior
    e.preventDefault();

    // get the input value from the form
    const newTaskDescription = document.getElementById("new-task-description");
    const taskDescription = newTaskDescription.value;

    // create a new task element and add it to the task list
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);

    // reset form
    e.target.reset();
  });
});