import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;








// import ExpenseItem from "./ExpenseItem";
// import Card from "./Card";
// import './Expense.css';

// function Expense(props){
//     return (
//         <Card className="expenses">
//           <h1>Expense items..</h1>
//           <ExpenseItem
//           ExpenseDate ={props.items[0].expensedate}
//           ExpenseCount={props.items[0].count}
//           ExpenseType={props.items[0].itemType}
//           ExpenseLocation={props.items[0].expenditureLocation}
//           ExpenseCost={props.items[0].itemCost}
//           />
          
    
//           <ExpenseItem
//           ExpenseDate ={props.items[1].expensedate}
//           ExpenseCount={props.items[1].count}
//           ExpenseType={props.items[1].itemType}
//           ExpenseLocation={props.items[1].expenditureLocation}
//           ExpenseCost={props.items[1].itemCost}
//           />
        
//           <ExpenseItem
//           ExpenseDate ={props.items[2].expensedate}
//           ExpenseCount={props.items[2].count}
//           ExpenseType={props.items[2].itemType}
//           ExpenseLocation={props.items[2].expenditureLocation}
//           ExpenseCost={props.items[2].itemCost}
//           />
          
    
//           <ExpenseItem
//           ExpenseDate ={props.items[3].expensedate}
//           ExpenseCount={props.items[3].count}
//           ExpenseType={props.items[3].itemType}
//           ExpenseLocation={props.items[3].expenditureLocation}
//           ExpenseCost={props.items[3].itemCost}
//           />
//         </Card>
    
//       );
// }
// export default Expense;