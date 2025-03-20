import "./assets/styles/App.css";
import PeriodicTable from "./components/PeriodicTable";
import Legend from "./components/Legend";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <PeriodicTable />
      <Legend />
    </div>
  );
}

export default App;
