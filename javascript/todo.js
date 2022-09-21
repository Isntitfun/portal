const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const todoArray = [];

function deleteTodoItem(event) {
  event.target.parentElement.remove();
}

function saveTodoArray(todoArray) {
  localStorage.setItem("Todos", todoArray);
}

function createTodoItem(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoArray.push(newTodo);
  saveTodoArray(todoArray);
  const todoItem = document.createElement("li");
  const todoContent = document.createElement("span");
  const todoDeleteBtnNew = document.createElement("button");
  todoItem.id = Date.now();
  todoContent.innerText = newTodo;
  todoDeleteBtnNew.innerText = "X";
  todoDeleteBtnNew.addEventListener("click", deleteTodoItem);
  todoList.appendChild(todoItem);
  todoItem.appendChild(todoContent);
  todoItem.appendChild(todoDeleteBtnNew);
  todoInput.value = "";
}

todoForm.addEventListener("submit", createTodoItem);
