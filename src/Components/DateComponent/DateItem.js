import "./DateItem.css";
function DateItem(props) {
  // formatting month day and year
  const month = props.passdate.toLocaleString("en-US", { month: "long" });
  const day = props.passdate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.passdate.getFullYear();
  return (
    <div className="expenses-date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default DateItem;
