const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const priority = document.getElementById('priority').value;
    const taskMonth = parseInt(document.getElementById('taskMonth').value);

    if (taskTitle.length > 100) {
        alert('Prosím o méně než 100 znaků.');
        return;
    }

    if (taskMonth > 12 || taskMonth < 1 || isNaN(taskMonth)) {
        alert('Prosím o validní měsíc (1-12).');
        return;
    }

    const task = {
        title: taskTitle,
        priority: priority,
        month: taskMonth
    };

    addTaskToList(task);

    taskForm.reset();
});

function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = `${task.title}, Priorita: ${task.priority}, Měsíc: ${task.month}`;

    if (task.month <= new Date().getMonth() + 1) {
        listItem.classList.add('red');
    }

    taskList.appendChild(listItem);
}