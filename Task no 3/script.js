document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");

    document.getElementById("add-task").addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");
        const taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(taskLabel);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";

        taskLabel.addEventListener("click", function () {
            taskLabel.classList.toggle("completed");
        });
    });
});
