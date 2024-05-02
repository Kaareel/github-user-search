import { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Card from "./components/Card";



function App() {
  const [bgColor, setBgColor] = useState('Light');
  const [user, setUser] = useState("mengasis");

  return (
    <div className={`h-screen bg-${bgColor} md:flex md:justify-center md:items-center`}>
      <div className="flex flex-col md:min-w-[750px] px-6 pt-8 pb-20">
        <Heading bgColor={bgColor} setBgColor={setBgColor} />
        <Form setUser={setUser} bgColor={bgColor}/>
        <Card user={user} bgColor={bgColor}/>
      </div>
    </div>
  );
}

export default App;
