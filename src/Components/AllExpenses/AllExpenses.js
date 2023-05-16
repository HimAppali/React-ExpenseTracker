import { useState } from "react";
import ExpensesItem from "../ExpensesItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import CardComponent from "../../WrapperComponents/CardComponent/CardComponent";

function AllExpenses(props) {
  // getting the dropdwon value from ExpenseFilter
  const [dropdownData, setDropdowndata] = useState("2022");

  const dropdownVal = (data) => {
    setDropdowndata(data);
  };

  const filteredData = props.expenses.filter((element) => {
    return element.date.getFullYear() === Number(dropdownData);
  });
  let expensesConent = (
    <CardComponent className="expenses-container">
      {`No item found in ${dropdownData}`}
    </CardComponent>
  );

  if (filteredData.length > 0) {
    expensesConent = filteredData.map((element) => (
      <ExpensesItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    ));
  }

  return (
    <div>
      <ExpenseFilter onDropdownChange={dropdownVal} selected={dropdownData} />
      <ExpenseChart expenses={filteredData} />
      {expensesConent}
      {/* <ExpensesItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      /> */}
    </div>
  );
}

export default AllExpenses;
