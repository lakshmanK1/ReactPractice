import ExpenseItem from "./components/ExpenseItem";

function App() {

  const ExpenseArrayList = [
    {
      id : 'id1',
      count : 'Item 1',
      itemType : 'Food',
      expenditureLocation : 'Hyderabad',
      itemCost : 'Rs:200/-',
    },
    {
      id : 'id2',
      count : 'Item 2',
      itemType : 'Petrol',
      expenditureLocation : 'Kakinada',
      itemCost : 'Rs:500/-',
    },
    {
      id : 'id3',
      count : 'Item 3',
      itemType : 'Movies',
      expenditureLocation : 'Vijayawada',
      itemCost : 'Rs:100/-',
    },
    {
      id : 'id4',
      count : 'Item 4',
      itemType : 'T-shirt',
      expenditureLocation : 'Bangalore',
      itemCost : 'Rs:1000/-',
    }
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <h1>Expense items..</h1>
      <ExpenseItem
      ExpenseCount={ExpenseArrayList[0].count}
      ExpenseType={ExpenseArrayList[0].itemType}
      ExpenseLocation={ExpenseArrayList[0].expenditureLocation}
      ExpenseCost={ExpenseArrayList[0].itemCost}
      >
      </ExpenseItem>

      <ExpenseItem
      ExpenseCount={ExpenseArrayList[1].count}
      ExpenseType={ExpenseArrayList[1].itemType}
      ExpenseLocation={ExpenseArrayList[1].expenditureLocation}
      ExpenseCost={ExpenseArrayList[1].itemCost}
      >
      </ExpenseItem>

      <ExpenseItem
      ExpenseCount={ExpenseArrayList[2].count}
      ExpenseType={ExpenseArrayList[2].itemType}
      ExpenseLocation={ExpenseArrayList[2].expenditureLocation}
      ExpenseCost={ExpenseArrayList[2].itemCost}
      >
      </ExpenseItem>

      <ExpenseItem
      ExpenseCount={ExpenseArrayList[3].count}
      ExpenseType={ExpenseArrayList[3].itemType}
      ExpenseLocation={ExpenseArrayList[3].expenditureLocation}
      ExpenseCost={ExpenseArrayList[3].itemCost}
      >
      </ExpenseItem>
    </div>

  );
}

export default App;
