import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Card from "./components/Card";

export interface UserData {
  name: string;
  login: string;
  blog: string;
  bio: string;
  twitter_username: string;
  created_at: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  company: string;
}

function App() {
  const [bgColor, setBgColor] = useState('Light');
  const [user, setUser] = useState("kaareel");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchData = async () => {
        if (!user) return;
        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok){
              setErrorMessage('No Result');
              return;
            }
            setErrorMessage('');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
          setErrorMessage('Error fetching data');
        }
    }
    fetchData();
}, [user, setErrorMessage]);

  return (
    <div className={`h-screen bg-${bgColor} md:flex md:justify-center md:items-center`}>
      <div className="flex flex-col px-6 pt-8 pb-20">
        <Heading bgColor={bgColor} setBgColor={setBgColor} />
        <Form user={user} setUser={setUser} bgColor={bgColor} errorMessage={errorMessage}/>
        <Card user={user} bgColor={bgColor} userData={userData} />
      </div>
    </div>
  );
}

export default App;
