import {  useState } from "react";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }
  
  return (
    <div className={`w-full h-screen flex flex-wrap ${darkMode ? "dark" : ''}`}>
      <div className="w-[20%]">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
      <div className="w-[80%] relative">
        <TopBar darkMode={darkMode}/>
        <MainContent />
      </div>
    </div>
  );
};

export default App;
