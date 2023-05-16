import "./ExpenseFilter.css";
import CardComponent from "../../WrapperComponents/CardComponent/CardComponent";

const ExpenseFilter = (props) => {
  // using useState to preserve the value of dropdown
  //const [dropdownval, setDropdownVal] = useState("2019");
  const dropdownValChange = (event) => {
    props.onDropdownChange(event.target.value);
  };
  // pass this dropdown value to AllExpenses.js file(parent)
  // console.log(dropdownval);

  return (
    <CardComponent className="expense-filter-form-container">
      <form className="expense-filter-form">
        <select
          onChange={dropdownValChange}
          className="expense-filter-form-control"
          value={props.selected}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </form>
    </CardComponent>
  );
};
export default ExpenseFilter;
