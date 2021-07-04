const addNewTaskBtn = document.getElementById("task-button");
const taskContainer = document.getElementById("list-container");
const inputField = document.getElementById("task");

addNewTaskBtn.addEventListener("click", function() {
  const newTask = document.createElement("p");
  newTask.innerText = inputField.value;
  taskContainer.appendChild(newTask);
  inputField.value = "";
  newTask.addEventListener("click", function() {
    newTask.style.textDecoration = "line-through";
  })
  newTask.addEventListener("dblclick", function() {
    taskContainer.removeChild(newTask);
})
})