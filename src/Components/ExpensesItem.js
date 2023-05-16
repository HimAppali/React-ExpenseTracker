import "./ExpensesItem.css";
import DateItem from "./DateComponent/DateItem";
import CardComponent from "../WrapperComponents/CardComponent/CardComponent";

// rules: the name of the custom component should start with Capital letter
function ExpensesItem(props) {
  return (
    <CardComponent className="expenses-container">
      <div className="expenses-data">
        <DateItem passdate={props.date}></DateItem>
      </div>
      <div className="expenses-data">{props.title}</div>
      <div className="expenses-data expenses-data-amount">
        <span className="expenses-amount">${props.amount}</span>
      </div>
    </CardComponent>
  );
}

export default ExpensesItem;
