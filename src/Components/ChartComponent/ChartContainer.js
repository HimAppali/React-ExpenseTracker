import CardComponent from "../../WrapperComponents/CardComponent/CardComponent";
import ChartItem from "./ChartItem";
const ChartContainer = (props) => {
  const dataPointvalue = props.dataPoints.map((datapoint) => {
    return datapoint.value;
  });
  const totalMax = Math.max(...dataPointvalue);
  return (
    <CardComponent className="expenses-container">
      {props.dataPoints.map((element) => {
        return (
          <ChartItem
            key={element.label}
            value={element.value}
            maxValue={totalMax}
            label={element.label}
          />
        );
      })}
    </CardComponent>
  );
};

export default ChartContainer;
