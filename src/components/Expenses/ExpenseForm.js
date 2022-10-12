import React,{useState} from 'react';

import './ExpenseForm.css';
function ExpenseForm(props){

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
        // Communicating with App.js 
        props.actionAfterSubmit(expenseData);
        
        // after submit user inputs, it make back to empty string 
        setTitleVal('');
        setAmountVal('');
        setDateVal('');

    } 

    return(
        <div className="new-expense">
        <form onSubmit={submitData}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' value={TitleVal} onChange={updateTitle}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' value={AmountVal} onChange={updateAmount}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' value={DateVal} onChange={updateDate}></input>
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