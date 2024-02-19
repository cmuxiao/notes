window.onload = function() {
    document.getElementById('currentDate').innerText = new Date().toDateString();
}

function addTask() {
    const taskInput = document.getElementById('newTask');
    const task = taskInput.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.onclick = function() {
            this.parentNode.removeChild(this);
        };
        document.getElementById('todoList').appendChild(listItem);
        taskInput.value = ''; // Clear input field after adding
    } else {
        alert('Please enter a task.');
    }
}
