import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Home loading={false}/>
    </div>
  );
}

export default App;
