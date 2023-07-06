const inputBox = document.querySelector(".input-task");
const pendingList = document.querySelector(".pending-list");
const completedList = document.querySelector(".completed-list");
const checkboxArray = [];
let noTasks = document.querySelector("#no-completed-tasks");

function addTask() {
  let toDoList = [];
  let doneList = [];
  const textDiv = document.createElement("div");
  textDiv.textContent = inputBox.value;
  let newTaskDiv = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.classList.add("container");
  checkbox.type = "checkbox";
  checkboxArray.push(checkbox);

  const trashcan = document.createElement("button");
  trashcan.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  newTaskDiv.appendChild(checkbox);
  newTaskDiv.appendChild(textDiv);
  newTaskDiv.appendChild(trashcan);
  pendingList.appendChild(newTaskDiv);

  newTaskDiv.classList.add("new-task");
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
      doneList.push(1);
    } else {
      textDiv.style.textDecoration = "none";
      pendingList.appendChild(newTaskDiv);
    }

    if (completedList.children.length === 0) {
      completedList.appendChild(noTasks);
    }
  });

  inputBox.value = "";

  function deleteTask() {
    console.log("new task div -> ", newTaskDiv);
    console.log("completedList -> ", completedList);
    console.log("pendingList -> ", pendingList);
    if (newTaskDiv in completedList) {
      completedList.removeChild();
    } else if (newTaskDiv in pendingList) {
      pendingList.removeChild();
    }
    // if (doneList.length > toDoList.length) {
    //   console.log(toDoList, doneList);
    //   completedList.removeChild(newTaskDiv);
    // } else {
    //   console.log(toDoList, doneList);
    //   pendingList.removeChild(newTaskDiv);
    // }
    if (completedList.children.length === 0) {
      completedList.appendChild(noTasks);
    }
  }

  toDoList.push(1);
  doneList.push(1);
  trashcan.onclick = deleteTask;
}

const addButton = document.querySelector(".add-task");
addButton.addEventListener("click", addTask);
