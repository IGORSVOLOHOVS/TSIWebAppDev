import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  // Initialize state to store the list of todos and the text of the new todo being entered
  const [todos, setTodos] = useState([]); // Array to store todo items
  const [newTodo, setNewTodo] = useState(''); // String to store the text of the new todo

  // Function to update the newTodo state whenever the text input changes
  const handleInputChange = (event) => {
    setNewTodo(event.target.value); 
  };

  // Function to add a new todo to the list
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]); // Add a new todo object to the todos array
    setNewTodo(''); // Clear the input field after adding the todo
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo // Update the completed status of the todo with the matching id
    ));
  };

  // Function to delete a todo from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Remove the todo with the matching id from the todos array
  };

  return (
    <div> 
      <h1>Todo List</h1> 
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} /> {/* Input field for entering new todos */}
        <button onClick={addTodo}>Add</button> {/* Button to add the new todo to the list */}
      </div>
      <ul>
        {todos.map(todo => ( // Map over the todos array to render each todo item
          <TodoItem 
            key={todo.id} // Unique key for each todo item
            todo={todo} // Pass the todo object to the TodoItem component
            toggleComplete={toggleComplete} // Pass the toggleComplete function to the TodoItem component
            deleteTodo={deleteTodo} // Pass the deleteTodo function to the TodoItem component
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;