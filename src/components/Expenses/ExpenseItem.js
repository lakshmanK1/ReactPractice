import Expensedate  from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const deleteButton = () => {
        let parent = document.querySelector('.card expense-item');
        let child = parent.document.querySelector('.expense-item__description')
        parent.removeChild(child);
    }

    return (
        <Card className='expense-item'>
            <Expensedate ExpenseDate={props.ExpenseDate}/>
            <ExpenseDetails  ExpenseCount={props.ExpenseCount}  ExpenseType={props.ExpenseType} 
            ExpenseLocation={props.ExpenseLocation}  ExpenseCost={props.ExpenseCost}/>
            <button onClick={deleteButton}>Delete</button>
        </Card>        
    );
}

export default ExpenseItem;