import React, { useState } from "react";
import "./AddNewExpense.css";
import ExpensesFormComponent from "./ExpensesForm/ExpensesFormComponent";
import CardComponent from "../../WrapperComponents/CardComponent/CardComponent";
const AddNewExpense = (props) => {
  const newExpenseData = function (datafromchild) {
    //console.log(`child data in parent ${datafromchild}`);
    // adding id key value to the data
    const newExpense = {
      // spreding/ copying data from datafromchild obj and adding new key/value par
      ...datafromchild,
      id: Math.random().toString(),
    };
    // again passing the datafromchild to App.js(parent)
    props.onAddExpense(newExpense);
    setShowForm(false);
  };
  let [showForm, setShowForm] = useState(false);
  //let showForm = true;
  // getting data from child to parent
  const showAddForm = () => {
    setShowForm(true);
  };

  const cancelData = (data) => {
    setShowForm(data);
  };

  let data;
  showForm
    ? (data = (
        <ExpensesFormComponent
          onAddNewExpense={newExpenseData}
          CancelDataFromExpenseFrom={cancelData}
        />
      ))
    : (data = (
        <button onClick={showAddForm} className="add-btn">
          Click Here To Add New Expense
        </button>
      ));

  return (
    <CardComponent className="addexpense-container">
      {/* we have to add custom event on child's selector and bind a function which will accept the data as parameter and this function is accesible in child using props and gets called from child component with the data */}
      {/* displaying data based on condition */}
      {data}
    </CardComponent>
  );
};

export default AddNewExpense;
