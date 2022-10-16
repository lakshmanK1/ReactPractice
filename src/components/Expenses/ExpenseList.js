import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    return(
        <ul className='expenses-list'>
        {props.items.length === 0 ? <p className='expenses-list__fallback'>No expense is present..</p> : props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          ))
        }
        

        {props.items.length === 1 ? <p className='expenses-list__fallback'>Only one expense is there, add more </p> : props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          ))}
        </ul>  
    );
}
export default ExpenseList