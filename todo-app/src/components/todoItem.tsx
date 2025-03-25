import React from "react";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 border-b text-gray-600 bg-blue-200 ${
        todo.completed ? "bg-green-600 line-through" : "bg-white"
      }`}
    >
      <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-400 hover:text-red-700"
      >
        ✖
      </button>
    </div>
  );
};

export default TodoItem;