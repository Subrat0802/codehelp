import "./App.css";
import GharItem from "./components/GharItem";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "2020",
    },
    {
      itemName: "Tide",
      itemDate: "21",
      itemMonth: "june",
      itemYear: "2020",
    },
    {
      itemName: "SurfExcel",
      itemDate: "22",
      itemMonth: "june",
      itemYear: "2020",
    },
    {
      itemName: "Ghadi",
      itemDate: "23",
      itemMonth: "june",
      itemYear: "2020",
    },
  ];
  return (
    <div>
      <Card>
        <GharItem ItemName={response[0].itemName}>Item no. 1</GharItem>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        />

        <GharItem ItemName={response[1].itemName}>Item no. 2</GharItem>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        />

        <GharItem ItemName={response[2].itemName}>Item no. 3</GharItem>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        />

        <GharItem ItemName={response[3].itemName}>Item no.4</GharItem>
        <ItemDate
          day={response[3].itemDate}
          month={response[3].itemMonth}
          year={response[3].itemYear}
        />
      </Card>

      <h1 className="App">hello Jee</h1>
    </div>
  );
}

export default App;
