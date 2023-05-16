import "./CardComponent.css";

function CardComponent(props) {
  // if {props.children} is not there it won't dislay inside data
  // to apply more than one class we have to pass arg as shown below
  const classes = `Card-container ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}
export default CardComponent;
