import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-wrap">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] relative">
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
