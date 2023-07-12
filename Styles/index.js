const inputBox = document.querySelector(".input-task");
const pendingList = document.querySelector(".pending-list");
const completedList = document.querySelector(".completed-list");
let noTasks = document.querySelector("#no-completed-tasks");

let toDoList = [];
let doneList = [];

function addTask() {
  const textDiv = document.createElement("div");
  textDiv.textContent = inputBox.value;

  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("new-task");

  const container = document.createElement("label");
  container.classList.add("container");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");

  container.appendChild(checkbox);
  container.appendChild(checkmark);

  const trashcan = document.createElement("button");
  trashcan.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  newTaskDiv.appendChild(container);
  newTaskDiv.appendChild(textDiv);
  newTaskDiv.appendChild(trashcan);

  pendingList.appendChild(newTaskDiv);

  newTaskDiv.id = "newTask";
  textDiv.classList.add("task-description");
  trashcan.classList.add("trash-can");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      textDiv.style.textDecoration = "line-through";
      completedList.appendChild(newTaskDiv);
      if (completedList.contains(noTasks)) {
        completedList.removeChild(noTasks);
      }
      doneList.push(newTaskDiv);
    } else {
      textDiv.style.textDecoration = "none";
      pendingList.appendChild(newTaskDiv);
      doneList = doneList.filter((task) => task !== newTaskDiv);
    }

    if (completedList.children.length === 0) {
      completedList.appendChild(noTasks);
    }
  });

  inputBox.value = "";

  function deleteTask() {
    if (doneList.includes(newTaskDiv)) {
      completedList.removeChild(newTaskDiv);
      doneList = doneList.filter((task) => task !== newTaskDiv); // Remove newTaskDiv from the doneList
    } else {
      pendingList.removeChild(newTaskDiv);
    }

    if (completedList.children.length === 0) {
      completedList.appendChild(noTasks);
    }
  }

  trashcan.onclick = deleteTask;
}

const addButton = document.querySelector(".add-task");
addButton.addEventListener("click", addTask);
