import SearchRestaurents from "./components/search-restaurants";
import RenderRestaurentList from "./components/render-restaurents-list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchRestaurents />
      <RenderRestaurentList />
    </div>
  );
}

export default App;
