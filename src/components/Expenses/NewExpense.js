import React from 'react';
import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [isediting, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  }

  const stopEditing = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
     {!isediting && <button onClick={startEditing}>Add Expense Details</button>}
     {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelBtn={stopEditing}/>}
    </div>
  );
};

export default NewExpense;