import { SearchIcon, MoonIcon, SunIcon } from "./components/Icon";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('Light');
  const ToggleColor = () => {
    setBgColor(bgColor === 'Light' ? 'Dark' : 'Light');
  };
  return (
    <div className={`h-screen bg-${bgColor}`}>
      <div className="flex flex-col px-6 pt-8 pb-20 ">
        <div className="flex justify-between items-center mx-5">
          <h1 className="text-txtHighContrast text-3xl">devfinder</h1>
          
          <button className="p-[2.5px]" onClick={ToggleColor}>{bgColor === 'Light' ? (<span className="flex">Dark <MoonIcon/></span>): (<span className="flex">Light <SunIcon/></span>)}</button>
        </div>
        <form className="flex items-center bg-Secondary p-2 mt-9 mb-4 border rounded-2xl w-full">
          <SearchIcon />
          <input type="text" className="w-full py-[6px]"/>
          <button className="bg-Primary border rounded-[10px] px-4 py-3 text-white">Search</button>
        </form>
        <div className="bg-Secondary py-8 px-6">
          card
        </div>
      </div>
    </div>
  );
}

export default App;
