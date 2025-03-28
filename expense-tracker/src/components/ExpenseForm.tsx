import React, { useState } from "react";
import { Expense } from "../types";
import ExpenseList from "./ExpenseList";

interface ExpenseFormProps {
  addExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
    //// State variables to store form input values.
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]> ([]);

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

    const updateExpenses = [...expenses, newExpense];
    setExpenses(updateExpenses)
    addExpense(newExpense);
    setName("");
    setAmount(0);
    setCategory("");
  };

   // Calculate the total amount of expenses
  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0)
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 bg-white shadow-md p-4 rounded-lg">
        <div className="w-full">
            <label htmlFor="expense-name" className="block mb-1 font-semibold text-sm">Expense Name</label>
            <input
            id="expense-name"
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
            />
        </div>
        <div className="w-full">
            <label htmlFor="expense-amount" className="block mb-1 font-semibold text-sm">Amount</label>
            <input
            id="expense-amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mb-2 p-2 border rounded w-full"
            />
        </div>
        <div className="w-full">
            <label htmlFor="expense-category" className="block mb-1 font-semibold text-sm">Category</label>
            <select
            id="expense-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded w-full text-gray-700"
            >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
            </select>
        </div>
        <button type="submit" className="bg-blue-400 p-2 rounded w-full text-white">
            Add Expense
        </button>
        </form>

        {/* Display the Expense List */}
        <ExpenseList expenses={expenses} />

        {/* Display the Total */}
        <div className="mt-10">
            <p className="font-semibold text-lg">Total: ${calculateTotal().toFixed(2)}</p>
        </div>
    </div>
  );
};

export default ExpenseForm;