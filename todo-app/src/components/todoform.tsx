import React, {useState} from "react";

//Data that the TodoItem component expects
interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {

  // Create State for User Input
  const [text, setText] = useState("");
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();  //Stops the page from reloading when the form is submitted
    if (text.trim()) {   //Ensures that the input isn’t empty
      addTodo(text);    // Calls the addTodo function (from App.tsx) to add the task
      setText("")       //Clear input field after adding the task
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
      <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}   /*Updates the text state when the user types*/
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
































