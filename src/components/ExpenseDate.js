import './ExpenseDate.css'

function Expensedate(props){
    const month = props.ExpenseDate.toLocaleString('en-US',{month:'long'});
    const day = props.ExpenseDate.toLocaleString('en-US',{day:'2-digit'});
    const year = props.ExpenseDate.getFullYear();

    return (
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
    );

}

export default Expensedate;
