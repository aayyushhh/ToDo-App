
document.getElementById('addButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = todoText;

        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '❌'; // Delete icon
        deleteBtn.onclick = function() {
            li.remove();
        };

        const completeBtn = document.createElement('span');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = '✓'; // Complete icon
        completeBtn.onclick = function() {
            const completedList = document.getElementById('completedList');
            completedList.appendChild(li);
            li.classList.add('completed');
            this.remove(); 

          
            const completedDeleteBtn = document.createElement('span');
            completedDeleteBtn.className = 'delete-btn';
            completedDeleteBtn.textContent = '❌'; 
            completedDeleteBtn.onclick = function() {
                li.remove(); 
            };

            li.appendChild(completedDeleteBtn); 
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        document.getElementById('todoList').appendChild(li);
        todoInput.value = ''; // Clear input
    }
});