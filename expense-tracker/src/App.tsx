import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Expense } from "./types";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);  //to store expenses

  const addExpense = (expense: Expense) => {   // add Expense to ExpenseForm
    setExpenses([...expenses, expense]);      // expenses to ExpenseList
  };

  return (
    <div className="mx-auto p-4 max-w-2xl">
      <h1 className="font-bold text-gray-600 text-3xl text-center">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;