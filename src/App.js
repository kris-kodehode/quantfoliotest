import FetchData from "./globalComponents/FetchData";
import MainPage from "./pages/MainPage";

function App() {

  FetchData()

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;