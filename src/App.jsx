import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";
import './assets/App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import { useState } from "react";


function App() {
  const[openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSidebarToggle={openSidebarToggle}  OpenSidebar={OpenSidebar}/>
     <Home />
    </div>
  );
};

export default App;
