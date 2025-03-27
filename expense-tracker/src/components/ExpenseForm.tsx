import React, { useState } from "react";
import { Expense  } from "../types";

//Create a form to enter new expenses.
interface ExpenseFormProps {
    addExpense: (expense: Expense ) => void
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ addExpense }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || amount <= 0 || !category) return;

        const newExpense: Expense = {
            id: Date.now(),
            name,
            amount,
            category,
        }
        addExpense(newExpense);
        setName("");
        setAmount(0);
        setCategory("");
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded">

        </form>
    )

};

export default ExpenseForm;