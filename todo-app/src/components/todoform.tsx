import React, {useState} from "react";


interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
      <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add a new task"
        className="p-3 border-gray-300 rounded w-full max-w-md"
      />
      <button type="submit" className="bg-blue-400 hover:bg-blue-900 px-5 py-2 rounded text-gray-100">
        Add
      </button>
    </form>
  )
};


export default TodoForm;
































