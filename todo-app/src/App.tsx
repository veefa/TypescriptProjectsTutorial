import React, { useState } from "react";
import TodoForm from "./components/todoform";
import TodoItem from "./components/todoItem";

// Define the Todo Type
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//Store the List of Todos Using useState
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //Add New Task
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  //Toggle Task Completion
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a Task
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-blue-100 p-4 min-h-screen">
      <h1 className="mb-4 font-bold text-gray-600 text-3xl text-center">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;