/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(to_do){
    this.todos.push(to_do);
    return true;
  }

  remove(indexOfTodo){
    
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
      return true;
    } else {
      console.error("Invalid index");
      return false;
    }
  }
  update(index, updatedTodo){
    
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
      return true;
    } else {
      console.error("Invalid index");
      return false;
    }
  } 
  

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid index");
      return null;  //get method need to return something, incase of index outbound it must return "this value is not here" so we prefer null.
   }
  }

  clear(){
    this.todos = [];
    return true;
  }

}

module.exports = Todo;
