import Expensedate  from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props){
    return (
        <div className='expense-item'>
            <Expensedate ExpenseDate={props.ExpenseDate}/>
            <ExpenseDetails  ExpenseCount={props.ExpenseCount}  ExpenseType={props.ExpenseType} 
            ExpenseLocation={props.ExpenseLocation}  ExpenseCost={props.ExpenseCost}/>
        </div>        
    );
}

export default ExpenseItem;
