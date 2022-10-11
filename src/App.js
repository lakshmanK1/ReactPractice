import React from "react";

import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";


function App() {

  const ExpenseArrayList = [
    {
      id : 'id1',
      expensedate : new Date(2022,9,10),
      count : 'Item 1',
      itemType : 'Food',
      expenditureLocation : 'Hyderabad',
      itemCost : 'Rs:200/-',
    },
    {
      id : 'id2',
      expensedate : new Date(2022,9,9),
      count : 'Item 2',
      itemType : 'Petrol',
      expenditureLocation : 'Kakinada',
      itemCost : 'Rs:500/-',
    },
    {
      id : 'id3',
      expensedate : new Date(2022,9,8),
      count : 'Item 3',
      itemType : 'Movies',
      expenditureLocation : 'Vijayawada',
      itemCost : 'Rs:100/-',
    },
    {
      id : 'id4',
      expensedate : new Date(2022,9,7),
      count : 'Item 4',
      itemType : 'T-shirt',
      expenditureLocation : 'Bangalore',
      itemCost : 'Rs:1000/-',
    }
  ];


   // Imported Reate from './react, to use React.createElement() method

  return React.createElement(Card,{}, React.createElement('h1',{},'Lets get started!'),
    React.createElement('h1',{},'Expense items..'),React.createElement(ExpenseItem,
    {ExpenseDate:ExpenseArrayList[0].expensedate,ExpenseCount:ExpenseArrayList[0].count,ExpenseType:ExpenseArrayList[0].itemType,
    ExpenseLocation:ExpenseArrayList[0].expenditureLocation,ExpenseCost:ExpenseArrayList[0].itemCost}),
    React.createElement(ExpenseItem,{ExpenseDate:ExpenseArrayList[1].expensedate,ExpenseCount:ExpenseArrayList[1].count,ExpenseType:ExpenseArrayList[1].itemType,
    ExpenseLocation:ExpenseArrayList[1].expenditureLocation,ExpenseCost:ExpenseArrayList[1].itemCost}),
    React.createElement(ExpenseItem,{ExpenseDate:ExpenseArrayList[2].expensedate,ExpenseCount:ExpenseArrayList[2].count,ExpenseType:ExpenseArrayList[2].itemType,
    ExpenseLocation:ExpenseArrayList[2].expenditureLocation,ExpenseCost:ExpenseArrayList[2].itemCost}),
    React.createElement(ExpenseItem,{ExpenseDate:ExpenseArrayList[3].expensedate,ExpenseCount:ExpenseArrayList[3].count,ExpenseType:ExpenseArrayList[3].itemType,
    ExpenseLocation:ExpenseArrayList[3].expenditureLocation,ExpenseCost:ExpenseArrayList[3].itemCost}));
 
//   return (
//     <Card>
//       <h1>Let's get started!</h1>
//       <h1>Expense items..</h1>
//       <ExpenseItem
//       ExpenseDate ={ExpenseArrayList[0].expensedate}
//       ExpenseCount={ExpenseArrayList[0].count}
//       ExpenseType={ExpenseArrayList[0].itemType}
//       ExpenseLocation={ExpenseArrayList[0].expenditureLocation}
//       ExpenseCost={ExpenseArrayList[0].itemCost}
//       />
      

//       <ExpenseItem
//       ExpenseDate ={ExpenseArrayList[1].expensedate}
//       ExpenseCount={ExpenseArrayList[1].count}
//       ExpenseType={ExpenseArrayList[1].itemType}
//       ExpenseLocation={ExpenseArrayList[1].expenditureLocation}
//       ExpenseCost={ExpenseArrayList[1].itemCost}
//       />
    
//       <ExpenseItem
//       ExpenseDate ={ExpenseArrayList[2].expensedate}
//       ExpenseCount={ExpenseArrayList[2].count}
//       ExpenseType={ExpenseArrayList[2].itemType}
//       ExpenseLocation={ExpenseArrayList[2].expenditureLocation}
//       ExpenseCost={ExpenseArrayList[2].itemCost}
//       >
//       </ExpenseItem>

//       <ExpenseItem
//       ExpenseDate ={ExpenseArrayList[3].expensedate}
//       ExpenseCount={ExpenseArrayList[3].count}
//       ExpenseType={ExpenseArrayList[3].itemType}
//       ExpenseLocation={ExpenseArrayList[3].expenditureLocation}
//       ExpenseCost={ExpenseArrayList[3].itemCost}
//       >
//       </ExpenseItem>
//     </Card>

//   );
}

export default App;