
import './ExpenseDate.css'
import Card from './Card';

function Expensedate(props){
    const month = props.ExpenseDate.toLocaleString('en-US',{month:'long'});
    const day = props.ExpenseDate.toLocaleString('en-US',{day:'2-digit'});
    const year = props.ExpenseDate.getFullYear();

    return (
            <Card className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </Card>
    );

}

export default Expensedate;
