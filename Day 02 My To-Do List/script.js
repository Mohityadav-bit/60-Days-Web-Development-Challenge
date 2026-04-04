let tasks = []; // each task = { text: "", completed: false }

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task 
addBtn.addEventListener("click", function () {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";
    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>

            <div class="buttons">
                <button class="complete-btn" onclick="toggleComplete(${index})">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button class="edit-btn" onclick="editTask(${index})">Edit</button>

                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// to Edit Task
function editTask(index) {
    let newText = prompt("Edit task:", tasks[index].text);

    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        displayTasks();
    }
}

// to Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
