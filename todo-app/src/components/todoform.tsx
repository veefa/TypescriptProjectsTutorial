import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="bg-blue-950 p-3 border border-gray-400 rounded w-full max-w-md text-gray-100"
      />
      <button type="submit" className="bg-blue-950 hover:bg-blue-300 px-8 py-2 rounded text-blue-50">
        Add
      </button>
    </form>
  );
};

export default TodoForm;