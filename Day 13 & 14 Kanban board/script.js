
const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [todo, progress, done];

let draggedTask = null;
let taskBeingEdited = null;


function addDragEvents(task) {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    task.style.opacity = "0.5";
  });

  task.addEventListener("dragend", () => {
    task.style.opacity = "1";
    draggedTask = null;
  });
}

function addColumnEvents(column) {
  column.addEventListener("dragover", (e) => e.preventDefault());

  column.addEventListener("dragenter", () => {
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("hover-over");
  });

  column.addEventListener("drop", () => {
    if (draggedTask) {
      column.appendChild(draggedTask);
      column.classList.remove("hover-over");
      updateCounts();
    }
  });
}

columns.forEach(addColumnEvents);

// ===================== COUNT UPDATE =====================
function updateCounts() {
  columns.forEach((col) => {
    const countEl = col.querySelector(".heading .right");
    countEl.innerText = col.querySelectorAll(".task").length;
  });
}

// ===================== MODAL LOGIC =====================
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".toggle-modal");
const modalBg = document.querySelector(".modal .bg");

const titleInput = document.querySelector("#task-title-input");
const descInput = document.querySelector("#task-desc-input");
const addTaskBtn = document.querySelector("#add-new-task");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  taskBeingEdited = null;
  addTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  descInput.value = "";
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

// ===================== CREATE TASK =====================
function createTask(title, desc) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", "true");

  task.innerHTML = `
    <h2>${title}</h2>
    <p>${desc}</p>
    <div class="btns">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn" id="delt-btn">Delete</button>
    </div>
  `;

  addDragEvents(task);
  addTaskActions(task);
  return task;
}

// ===================== DELETE & EDIT ACTIONS =====================
function addTaskActions(task) {
  const editBtn = task.querySelector(".edit-btn");
  const deleteBtn = task.querySelector(".delete-btn");

  // DELETE
  deleteBtn.addEventListener("click", () => {
    task.remove();
    updateCounts();
  });

  // EDIT
  editBtn.addEventListener("click", () => {
    modal.classList.add("active");

    titleInput.value = task.querySelector("h2").innerText;
    descInput.value = task.querySelector("p").innerText;

    taskBeingEdited = task;
    addTaskBtn.innerText = "Update Task";
  });
}

// ===================== ADD / UPDATE TASK =====================
addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (!title || !desc) {
    alert("Please fill all fields");
    return;
  }

  // UPDATE EXISTING TASK
  if (taskBeingEdited) {
    taskBeingEdited.querySelector("h2").innerText = title;
    taskBeingEdited.querySelector("p").innerText = desc;
    taskBeingEdited = null;
  }
  // ADD NEW TASK
  else {
    const task = createTask(title, desc);
    todo.appendChild(task);
  }

  updateCounts();
  modal.classList.remove("active");
  titleInput.value = "";
  descInput.value = "";
  addTaskBtn.innerText = "Add Task";
});

// ===================== INIT EXISTING TASKS =====================
document.querySelectorAll(".task").forEach((task) => {
  addDragEvents(task);
  addTaskActions(task);
});

updateCounts();
