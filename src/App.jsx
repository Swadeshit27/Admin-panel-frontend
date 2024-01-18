import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";
import './assets/App.css'
import Home from './Components/Home'
import Header from './Components/Header'


const App = () => {
  return (
    <div className="grid-container">
     <Header/>
     <Sidebar/>
     <Home />
    </div>
  );
};

export default App;
