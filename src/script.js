function showAddTaskPage() {
    document.getElementById("taskListPage").style.display = "none";
    document.getElementById("addTaskPage").style.display = "block";
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        showTaskListPage();
    }
}

function showTaskListPage() {
    document.getElementById("taskListPage").style.display = "block";
    document.getElementById("addTaskPage").style.display = "none";
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

window.onload = displayTasks;