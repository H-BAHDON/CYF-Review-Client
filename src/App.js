import Header from "../src/componets/Header/header.jsx";
import Card from "../src/componets/cards/Card.jsx";
import {DataForCardView } from './componets/data/dataForCards.js';
import './App.css'
function App() {


  return (
    <div className="App">
      <Header />

<div className="viewCard">
  {
    DataForCardView.map(data => (
      <Card
        key={data.id} // Don't forget to add a unique key for each item when rendering a list of components
        title={data.title}
        lang={data.lang}
        description={data.description} // Use 'description' instead of 'describe'
      />
    ))
  }
</div>


    </div>
  );
}

export default App;
