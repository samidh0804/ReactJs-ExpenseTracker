import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
//   {
//     id: 'e1',
//     title: 'school fee',
//     amount: 250,
//     date: new Date(2021,5,12)
//   },
//   {
//    id: 'e2',
//    title: 'book',
//    amount: 300,
//    date: new Date(2021,6,7)
//  },
//  {
//    id: 'e3',
//    title: 'petrol',
//    amount: 100,
//    date: new Date(2021,9,20)
//  },
//  {
//    id: 'e4',
//    title: 'trip',
//    amount: 500,
//    date: new Date(2021,12,10)
//  }
]

  const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (container) => {
      const updatedExpense = [container, ...expenses];
      setExpenses(updatedExpense);

    };
    return(
          <div>
            <NewExpense onAddExpense={ addExpenseHandler }/>
            <Expenses item={expenses}/>
            
          </div>
            
    );

}

export default App;