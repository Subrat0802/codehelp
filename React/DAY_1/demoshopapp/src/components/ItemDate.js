import "./ItemDate.css";
function ItemDate(props) {
  const { day, month, year } = props;
  return (
    <div className="mfg-date">
      <span> {day}</span>
      <span> {month}</span>
      <span> {year}</span>
    </div>
  );
}

export default ItemDate;
