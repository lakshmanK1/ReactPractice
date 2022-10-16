import React, { useState } from 'react';

import ExpensesChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
    <ExpensesChart expenses={filterExpense} />
    <ExpenseList items={filterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;

