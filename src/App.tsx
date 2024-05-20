import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Card from "./components/Card";
import getUser from "./services/getUser";

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
	const [query, setQuery] = useState("kaareel");
	const [userData, setUserData] = useState<UserData | undefined>(undefined);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			if (!query) return;
			try {
				const data = await getUser(query);
				setUserData(data);

				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} catch (error: any) {
				if (error.message === "No Result") {
					setErrorMessage("No Result");
					return;
				}
				setErrorMessage("System error");
			}
		};

		fetchData();
	}, [query]);

	return (
		<div className="h-screen bg-Light dark:bg-Dark md:flex md:justify-center md:items-center">
			<div className="flex flex-col px-6 pt-8 pb-20">
				<Heading />
				<Form query={query} setQuery={setQuery} errorMessage={errorMessage} />
				<Card query={query} userData={userData} />
			</div>
		</div>
	);
}

export default App;
