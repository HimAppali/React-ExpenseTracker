import { useState } from "react";
import AllExpenses from "./Components/AllExpenses/AllExpenses";
import CardComponent from "./WrapperComponents/CardComponent/CardComponent";
import AddNewExpense from "./Components/AddNewExpense/AddNewExpense";

function App() {
  const expensesDataFake = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 500.65,
      date: new Date(2020, 5, 21),
    },
    {
      id: 2,
      title: "Groceries",
      amount: 80.65,
      date: new Date(2022, 1, 2),
    },
    {
      id: 3,
      title: "Trip",
      amount: 10.65,
      date: new Date(2023, 3, 9),
    },
    {
      id: 4,
      title: "Hospital",
      amount: 120.65,
      date: new Date(2020, 9, 16),
    },
  ];
  const [expenseData, setExpenseData] = useState(expensesDataFake);

  const addNewExpesetoList = (newExpenseData) => {
    console.log(newExpenseData);
    // adding new expenses to old expenses
    setExpenseData((prevData) => {
      return [newExpenseData, ...prevData];
    });
  };

  return (
    <CardComponent className="main-container">
      {/* using custom component 1. import 2.use as html tag*/}
      <AddNewExpense onAddExpense={addNewExpesetoList} />
      <AllExpenses expenses={expenseData} />
    </CardComponent>
  );
}

export default App;
