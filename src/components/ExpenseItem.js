import './ExpenseItem.css';

function ExpenseItem(props){
    
    return (
        <div className='expense-item'>
            <div className='items'>{props.ExpenseCount}</div>
            <div className='expense-item__description'>
                <h2>{props.ExpenseType}</h2>
                <h2>{props.ExpenseLocation}</h2>
                <div className='expense-item__price'>{props.ExpenseCost}</div>
            </div>
        </div>        
    );
}

export default ExpenseItem;
