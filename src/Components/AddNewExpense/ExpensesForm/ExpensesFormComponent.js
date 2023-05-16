import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesFormComponent = (props) => {
  const [title, setTitleTo] = useState("");
  const [date, setDateTo] = useState("");
  const [amount, setAmountTo] = useState("");
  const changedTitle = (event) => {
    setTitleTo(event.target.value);
  };
  const changeDate = (event) => {
    setDateTo(event.target.value);
  };
  const changeAmount = (event) => {
    setAmountTo(event.target.value);
  };

  const cancelClicked = () => {
    // when cancel chicked this from should hide and reset but it has to be handled in AddExpenses.js file, Beacase it is a parent we have to send a false flag to parent

    props.CancelDataFromExpenseFrom(false);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    // console.log(newExpense);
    // we have to send newExpense data to AddNewExpense.js first and than to app.js to show the newly added expense
    // passing data from child to parent
    // we have to call a function in parent component and pass data as param to that function or method
    props.onAddNewExpense(newExpense);
    // resetting form - 2way binding using value attribute on every element
    setTitleTo("");
    setAmountTo("");
    setDateTo("");
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="expenses-form-container">
          <div className="expenses-form-control">
            <label>Title</label>
            <input
              type="text"
              onChange={changedTitle}
              value={title}
              className="expenses-form-control-input"
            />
          </div>
          <div className="expenses-form-control">
            <label>Expense Date</label>
            <input
              type="date"
              onChange={changeDate}
              value={date}
              className="expenses-form-control-input"
            />
          </div>
          <div className="expenses-form-control">
            <label>Amount</label>
            <input
              type="number"
              onChange={changeAmount}
              value={amount}
              className="expenses-form-control-input"
            />
          </div>
          <div className="expenses-form-control">
            <button className="cancel-expenses-btn" onClick={cancelClicked}>
              Cancel
            </button>
          </div>
          <div className="expenses-form-control">
            <button type="submit" className="add-expenses-btn">
              Add New Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpensesFormComponent;
