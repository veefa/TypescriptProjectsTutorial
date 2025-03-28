import React, { useState } from "react";
import { Expense } from "../types";

interface ExpenseFormProps {
  addExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
    //// State variables to store form input values.
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();     // Prevents the default form submission behavior (which would reload the page).
    if (!name || amount <= 0 || !category) return;   // Checks if any of fields are empty or invalid

    // Create expense object
    const newExpense: Expense = {
      id: Date.now(),  // Generates a unique id based on current timestamp
      name,
      amount,
      category,
    };

    addExpense(newExpense);
    setName("");
    setAmount(0);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 bg-white shadow-md p-4 rounded-lg">
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="mb-2 p-2 border rounded w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-400 p-2 rounded w-full text-white">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;