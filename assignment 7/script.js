const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") {
    alert("write task in the input field");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
  }
  taskInput.value = "";
}
