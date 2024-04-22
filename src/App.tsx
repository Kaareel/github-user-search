import { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";



function App() {
  const [bgColor, setBgColor] = useState('Light');

  return (
    <div className={`h-screen bg-${bgColor} flex justify-center items-center`}>
      <div className="flex flex-col min-w-[750px] px-6 pt-8 pb-20">
        <Heading bgColor={bgColor} setBgColor={setBgColor}/>
        <Form/>
        <div className="bg-Secondary py-8 px-6">
          card
        </div>
      </div>
    </div>
  );
}

export default App;
