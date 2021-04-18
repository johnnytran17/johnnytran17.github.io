// JavaScript Document
// This is the array
var todos = ['item 1','item 2', 'item 3']

//This allows me to display todos
function displayTodos() {
	console.log('My todos:',todos);
}

// This allows me to add a todo
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// This allows me to change a todo
function changeTodo(position,newValue){
	todos[position] = newValue;
	displayTodos();
}

//This allows me to delete a todo
function deleteTodo(position){
	todos.splice(position,1);
	displayTodos()
}