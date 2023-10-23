// Get references to HTML elements using their IDs
const taskInput = document.getElementById("taskInput"); // Input field for adding new tasks
const taskList = document.getElementById("taskList"); // List to display tasks

// Function to add a new task
function addTask() {
    // Get the task text from the input field and remove leading/trailing white spaces
    const taskText = taskInput.value.trim();

    // Check if the task text is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return; // Exit the function if the task text is empty
    }

    // Create a new list item (li) element to represent the task
    const li = document.createElement("li");
    // Populate the li element with HTML content, including a checkbox, task text, and a delete button
    li.innerHTML = `
        <input type="checkbox" onclick="markComplete(this)"> <!-- Checkbox to mark the task as complete -->
        <span>${taskText}</span> <!-- Display the task text -->
        <button class="btn btn-primary" onclick="deleteTask(this)">Delete</button> <!-- Delete button -->
    `;

    // Append the new task (li) element to the task list
    taskList.appendChild(li);

    // Clear the task input field for the next task entry
    taskInput.value = "";
}

// Function to mark a task as complete
function markComplete(checkbox) {
    // Find the task (span) associated with the clicked checkbox
    const task = checkbox.nextElementSibling;

    // Check if the checkbox is checked
    if (checkbox.checked) {
        // If checked, apply a line-through text decoration to the task text
        task.style.textDecoration = "line-through";
    } else {
        // If not checked, remove the text decoration
        task.style.textDecoration = "none";
    }
}

// Function to delete a task
function deleteTask(button) {
    // Find the parent list item (li) of the clicked delete button
    const li = button.parentElement;

    // Remove the list item from the task list
    taskList.removeChild(li);
}
