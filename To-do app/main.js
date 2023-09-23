// Tasks Array on local storage
const tasksArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

console.log(tasksArray);

// Function for Task creation
function createTask(task) {
    tasksArray.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    location.reload();
}

// Task Creation Logic
document.querySelector("#addBtn").addEventListener("click", () => {
const task = document.querySelector("#task");
createTask(task);
});


// Function to Display Tasks
function displayTasks() {
  let todos = "";
  for (let i = 0; i < tasksArray.length; i++) {
    todos +=   `<div class="task">
                    <div class="task-section">
                        <textarea disabled>${tasksArray[i]}</textarea>
                        <div class="edit-section">
                            <i class="fa-solid fa-pen-to-square edit"></i>
                            <i class="fa-solid fa-trash delete"></i>
                        </div>
                    </div>
                    <div class="updation" style="display:none">
                        <button class="save">Save</button>
                    </div>
                </div>`;
  }
  document.querySelector("#todos").innerHTML = todos;

  deleteListener();
  editListener();
  saveListener();
}

// Function to Delete Tasks
function deleteTask(task) {
    tasksArray.splice(task, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    location.reload();
  }

function deleteListener() {
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((db, task) => {
    db.addEventListener("click", () => {
      deleteTask(task);
    });
  });
}


// Function to Edit Tasks
function editListener() {
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

// Function to update task
function updateTask(text, i) {
    tasksArray[i] = text;
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    location.reload();
  }

// Function to save task after updation
function saveListener() {
  const saveBtn = document.querySelectorAll(".save");
  const inputs = document.querySelectorAll(".task-section textarea");
  saveBtn.forEach((sb, task) => {
    sb.addEventListener("click", () => {
      updateTask(inputs[task].value, task);

    });
  });
}

window.onload = function () {
  displayTasks();
};