import "./App.css";
import { LiveDashboard } from "./LiveDashboard";
import { Nav } from "./Nav";
import { Chart, registerables } from 'chart.js';
import { unstuck } from "./store";
import { useSignals } from "@preact/signals-react/runtime";
Chart.register(...registerables);

function App() {
  useSignals();

  console.log('key', unstuck.value);

  return (
    <div className="App" key={unstuck.value}>
      <Nav></Nav>
      <LiveDashboard></LiveDashboard>
    </div>
  );
}

export default App;
