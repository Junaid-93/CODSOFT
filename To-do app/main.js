
const tasksArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

console.log(tasksArray);

document.querySelector("#addBtn").addEventListener("click", () => {
const task = document.querySelector("#task");
createTask(task);
});

function createTask(task) {
  tasksArray.push(task.value);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  location.reload();
}

function displayTasks() {
  let todos = "";
  for (let i = 0; i < tasksArray.length; i++) {
    todos += `<div class="task">
            <div class="task-section">
                <textarea disabled>${tasksArray[i]}</textarea>
                <div class="edit-section">
                    <i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-solid fa-trash delete"></i>
                </div>
            </div>
            <div class="updation">
                <button class="save">Save</button>
                <button class="cancel">Cancel</button>
            </div>
        </div>`;
  }
  document.querySelector("#todos").innerHTML = todos;

  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();


}

function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((db, task) => {
    db.addEventListener("click", () => {
      deleteTask(task);
    });
  });
}


function deleteTask(task) {
  tasksArray.splice(task, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  location.reload();
}

function activateEditListeners() {
  const editBtn = document.querySelectorAll(".edit");
  const updation = document.querySelectorAll(".updation");
  const inputs = document.querySelectorAll(".task-section textarea");
  editBtn.forEach((eb, task) => {
    eb.addEventListener("click", () => {
      updation[task].style.display = "block";
      inputs[task].disabled = false;
    });
  });
}

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll(".save");
  const inputs = document.querySelectorAll(".task-section textarea");
  saveBtn.forEach((sb, task) => {
    sb.addEventListener("click", () => {
      updateTask(inputs[task].value, task);

    });
  });
}

function updateTask(text, i) {
  tasksArray[i] = text;
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  location.reload();
}

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll(".cancel");
  const updateController = document.querySelectorAll(".updation");
  const inputs = document.querySelectorAll(".task-section textarea");
  cancelBtn.forEach((cb, task) => {
    cb.addEventListener("click", () => {
      updateController[task].style.display = "none";
      inputs[task].disabled = true;
    });
  });
}

window.onload = function () {
  displayTasks();
};