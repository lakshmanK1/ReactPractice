// import React,{ useState } from 'react';
import Card from '../UI/Card';
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
    // To Change Tittle
    // const [titleData, setTitle] = useState(props.ExpenseType);
    // const UpdateTitle = () => {
    //     setTitle("Updating..");
    //     console.log(titleData);
    // }
    
    // // To Change Cost
    // const [costData, setCost] = useState(props.ExpenseCost);
    // const UpdateCost = () => {
    //     setCost('100$');
    //     console.log(costData);
    // }
 
    return (
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        
       </div>
    );
}

export default ExpenseDetails;