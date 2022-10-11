import Expensedate  from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';


function ExpenseItem(props){
    return (
        <Card className='expense-item'>
            <Expensedate ExpenseDate={props.ExpenseDate}/>
            <ExpenseDetails  ExpenseCount={props.ExpenseCount}  ExpenseType={props.ExpenseType} 
            ExpenseLocation={props.ExpenseLocation}  ExpenseCost={props.ExpenseCost}/>
        </Card>        
    );
}

export default ExpenseItem;