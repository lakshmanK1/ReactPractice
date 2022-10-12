import React,{useState} from 'react';

import './ExpenseForm.css';
function ExpenseForm(){

    const [TitleVal, setTitleVal] = useState('');
    const [AmountVal, setAmountVal] = useState('');
    const [DateVal, setDateVal] = useState('');


    const updateTitle = (event) => {
        setTitleVal(event.target.value);
    }

    const updateAmount = (event) => {
        setAmountVal(event.target.value);
    }

    const updateDate = (event) => {
        setDateVal(event.target.value);
    }

    const submitData = (event) => {
        event.preventDefault();

        const expenseData = {
            title : TitleVal,
            amount : AmountVal,
            date : new Date(DateVal)
        }

        console.log(expenseData);

    } 

    return(
        <div className="new-expense">
        <form onSubmit={submitData}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' onChange={updateTitle}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' onChange={updateAmount}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' onChange={updateDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </div>
    );
}
export default ExpenseForm;