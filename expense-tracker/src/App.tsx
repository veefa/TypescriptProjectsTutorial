import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Expense } from "./types";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <h1 className="font-bold text-3xl">Hello, World!</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;