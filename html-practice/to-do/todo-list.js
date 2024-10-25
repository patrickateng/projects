const todoList = [{

  name: '',
  dueDate: ''

}] 

function addKeyDown(event) {

  if (event.key === 'Enter') {

    addTodo()

  }

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo()
})


function addTodo() {
  
  const inputElement = document.querySelector('.js-name-input')

  const name = inputElement.value

  const dueDateInputElement = document.querySelector('.js-due-date-input')

  const dueDate = dueDateInputElement.value

  todoList.push({
    // name: name,
    // dueDate: dueDate.   If the property and the variable name are the same we can just
    // type it out once. The lines below do the same as the lines above
    name,
    dueDate
  })

  inputElement.value = ''
  dueDateInputElement.value = ''

  renderTodoList()
  
}

function renderTodoList() {

  let todoListHTML = ''

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">
          Delete
        </button>
      `

    todoListHTML += html

  })

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

  document.querySelectorAll('.js-delete-todo-button').forEach((delete_button, index) => {
    delete_button.addEventListener('click', () => {
      todoList.splice(index, 1)
      renderTodoList()
    })
  })

}