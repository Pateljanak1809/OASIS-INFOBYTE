
const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');


taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});


function addTask(taskText) {
    const taskElement = document.createElement('li');
    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', function() {
        completeTask(taskElement);
    });

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
        editTask(taskElement);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(taskElement);
    });

    actions.appendChild(completeButton);
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    taskElement.textContent = taskText;
    taskElement.appendChild(actions);

    pendingTasksList.appendChild(taskElement);
}


function completeTask(taskElement) {
    taskElement.classList.toggle('completed');
    const actions = taskElement.querySelector('.actions');
    const completeButton = actions.querySelector('button:nth-of-type(1)');
    completeButton.innerText = 'Undo';
    completeButton.removeEventListener('click', completeTask);
    completeButton.addEventListener('click', function() {
        undoTask(taskElement);
    });
    completedTasksList.appendChild(taskElement);
}


function undoTask(taskElement) {
    taskElement.classList.toggle('completed');
    const actions = taskElement.querySelector('.actions');
    const completeButton = actions.querySelector('button:nth-of-type(1)');
    completeButton.innerText = 'Complete';
    completeButton.removeEventListener('click', undoTask);
    completeButton.addEventListener('click', function() {
        completeTask(taskElement);
    });
    pendingTasksList.appendChild(taskElement);
}


function editTask(taskElement) {
    const currentText = taskElement.firstChild.textContent;
    const newText = prompt('Edit task:', currentText);
    if (newText !== null && newText.trim() !== '') {
        taskElement.firstChild.textContent = newText.trim();
    }
}


function deleteTask(taskElement) {
    taskElement.remove();
}
