import "./ChartItem.css";

const ChartItem = (props) => {
  console.log(props.data);
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-item-box">
      <div className="chart-item-eachbox">
        <div className="chart_item">
          <div style={{ height: barFillHeight, backgroundColor: "red" }}></div>
        </div>
        <div>{props.label}</div>
      </div>
    </div>
  );
};

export default ChartItem;
