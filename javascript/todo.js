const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

let todoArray = [];

function saveTodoArray(todoArray) {
  localStorage.setItem("Todos", JSON.stringify(todoArray));
}

function deleteTodoObj(event) {
  const deleteTarget = event.target.parentElement;
  const updatedTodoArray = todoArray.filter(
    (todo) => todo.id !== parseInt(deleteTarget.id)
  );
  todoArray = updatedTodoArray;
  saveTodoArray(todoArray);
  deleteTarget.remove();
}

function paintNewTodoObj(newTodoObj) {
  const todoItem = document.createElement("li");
  const todoContent = document.createElement("span");
  const todoDeleteBtnNew = document.createElement("button");

  todoContent.innerText = newTodoObj.text;
  todoItem.id = newTodoObj.id;
  todoDeleteBtnNew.innerText = "X";

  todoDeleteBtnNew.addEventListener("click", deleteTodoObj);

  todoList.appendChild(todoItem);
  todoItem.appendChild(todoContent);
  todoItem.appendChild(todoDeleteBtnNew);

  todoInput.value = "";
}

function createNewTodoObj(newTodo) {
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArray.push(newTodoObj);
  saveTodoArray(todoArray);
  paintNewTodoObj(newTodoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  createNewTodoObj(newTodo);
}
todoForm.addEventListener("submit", handleSubmit);

const savedTodoArray = JSON.parse(localStorage.getItem("Todos"));

if (savedTodoArray !== null) {
  savedTodoArray.forEach(paintNewTodoObj);
  todoArray = savedTodoArray;
}
