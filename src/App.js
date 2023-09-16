import Header from "../src/componets/Header/header.jsx";
import Card from "../src/componets/cards/Card.jsx";

function App() {

  const fakeData = {
    id: 1,
    title: "Hello",
    lang: "js",
    describe: "testing this works"
  }


  return (
    <div className="App">
      <Header />
      <Card
        title={fakeData.title}
        lang={fakeData.lang}
        describe={fakeData.describe}
/>
    </div>
  );
}

export default App;
