import React from "react";
import { Expense } from "../types";

//Create the Expense List Component
interface ExpenseListProps {
    expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return(
        <div className="mt-4">
            {expenses.length === 0 ? (
                <p className="text-gray-500 text-center">
                    No expenses added yet.</p> 
                    ) :(
                    expenses.map((expense) => (
                        <div key={expense.id} className="p-2 border-b">
                            <p>
                            <strong>{expense.name}</strong> - ${expense.amount} (
                            {expense.category})
                            </p>
                        </div>
                    ))
                )               
            }

        </div>
    );
};

export default ExpenseList;