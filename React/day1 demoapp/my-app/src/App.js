import ItemDate from './components/ItemDate';
import Item from './components/Item';
import Card from './components/Card';

function App() {

  // const itemTwo = "SurfExxxcel"

  const response = [
    {
      itemName: "Nirma",
      itemDate: "10",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "SurfExcel",
      itemDate: "11",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Ghadi",
      itemDate: "12",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Ariel",
      itemDate: "13",
      itemMonth: "June",
      itemYear: "1998"
    }
  ]
  return (
    <div className="App">
      <Card>
        <Item name={response[0].itemName} Hello Jee/>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>

        <Item name={response[1].itemName}/>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}/>

        <Item name={response[2].itemName}/>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}/>

        <Item name={response[3].itemName}/>
        <ItemDate day={response[3].itemDate} month={response[3].itemMonth} year={response[3].itemYear}/>
      </Card>
    </div>
  );
}

export default App;
