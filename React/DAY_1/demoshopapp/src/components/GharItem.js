import "./GharItem.css";
function GharItem(props) {
  const { ItemName } = props;
  return (
    <div>
      <h2 className="nirma">{ItemName}</h2>
      {props.children}
    </div>
  );
}

export default GharItem;
