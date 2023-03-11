import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Chart from "react-apexcharts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideMenu></SideMenu>
    </div>
  );
}

export default App;
