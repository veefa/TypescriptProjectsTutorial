import React from "react";

//props (data) that the TodoItem component expects
interface TodoItemProps {
    todo: { 
        id: number;
        text: string;
        completed: boolean;
    }
    toggleTodo: (id: number) => void     //function that takes an id and marks task as complete/incomplete
    deleteTodo: (id: number) => void    // function that takes an id and removes the task
}

//Define the Component
const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
     return (
        <div className={`flex justify-between items-center p-2 border-b text-gray-600 ${todo.completed ? "bg-green-400 line-through" : "bg-blue-50"}`}
        > 
        {/* {Render the Task (todo.text)}  */}
        <span onClick={() => toggleTodo(todo.id)} className="text-ellipsis cursor-pointer">
            {todo.text}
        </span>
        <button
        onClick={() => deleteTodo(todo.id)}
        className="font-bold text-red-700 hover:text-red-400 text-xl"
        >
            ❌
        </button>
        </div>
     )
}

export default TodoItem;