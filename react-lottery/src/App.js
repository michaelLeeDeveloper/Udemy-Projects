import './App.css';
import Lottery from "./Lottery"

function App() {
  return (
    <div className="App">
      <Lottery title="Lottery"
        numBalls="6"
        maxNum="40" ></Lottery>
    </div>
  );
}

export default App;
