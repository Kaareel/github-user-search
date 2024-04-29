import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import { IconLocate, IconTwitter, IconWork } from "./components/Icon";


interface UserData {
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
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchData();
  }, [user]
  )

  return (
    <div className={`h-screen bg-${bgColor} flex justify-center items-center`}>
      <div className="flex flex-col min-w-[750px] px-6 pt-8 pb-20">
        <Heading bgColor={bgColor} setBgColor={setBgColor} />
        <Form setUser={setUser} />
        <div className="bg-Secondary py-8 px-6">
          {userData && (
            <div className="flex gap-2">
              <div>
                <img src={userData.avatar_url} alt="User Avatar" className="w-[100px] h-[100px] rounded-full" />
              </div>
              <div className="w-full">
                <div>
                  <div className="flex justify-between">
                    <h2>{userData.name}</h2>
                    <p>{userData.created_at}</p>
                  </div>
                  <p>@{userData.login}</p>
                  <p>{userData.bio}</p>
                </div>
                <div className="flex">
                  <p className="flex flex-col">repos <span>{userData.public_repos}</span></p>
                  <p className="flex flex-col">Followers <span>{userData.followers}</span> </p>
                  <p className="flex flex-col">Following <span>{userData.following}</span></p>
                </div>
                <div>
                  <p className="flex"><IconLocate /> {userData.location}</p>
                  {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <p> <IconTwitter /> <a href="#">{userData.twitter_username}</a></p>
                  <p> <IconWork /> <span>{userData.company}</span></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
