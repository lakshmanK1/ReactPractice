import React,{ useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseDetails = (props) => {
    // To Change Tittle
    const [titleData, setTitle] = useState(props.ExpenseType);
    const UpdateTitle = () => {
        setTitle("Updating..");
        console.log(titleData);
    }
    
    // To Change Cost
    const [costData, setCost] = useState(props.ExpenseCost);
    const UpdateCost = () => {
        setCost('100$');
        console.log(costData);
    }
 
    return (
    <Card className='expense-item'>
        <div className='items'>{props.ExpenseCount}</div>
            <div className='expense-item__description'>
                <h2>{titleData}</h2>
                <h2>{props.ExpenseLocation}</h2>
                <div className='expense-item__price'>{costData}</div>
            </div>
            <button onClick={UpdateTitle}>Title</button>
            <button onClick={UpdateCost}>Cost</button>
    </Card>
    );
}

export default ExpenseDetails;