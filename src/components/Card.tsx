import type { UserData } from "../App";
import { IconLocate, IconTwitter, IconWork, IconLinkedin } from "./Icon";

interface Props {
	query: string;
	userData?: UserData;
}

function Card(props: Props) {
	if (!props.userData) {
		return null;
	}

	const date = new Date(props.userData.created_at);

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	function formatBio(text: string) {
		if (!text) return <li>This profile has no bio</li>;

		const lines = text ? text.split(/\r?\n/) : [text];

		const filteredLines = lines.filter(
			(line) => typeof line === "string" && line.trim() !== "",
		);

		const description = filteredLines.map((line) => line.trim()).join(", ");

		return description.split(",").map((interest, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<li key={index}>{interest}</li>
		));
	}

	const bio = formatBio(props.userData.bio);

	const company = props.userData.company
		? props.userData.company.replace(/@/, "")
		: "Not Available";

	const location = props.userData.location || "Not Available";

	const twitterUsername = props.userData.twitter_username || "Not Available";

	return (
		<div className="bg-white text-txtLowContrast dark:bg-bgSecondary dark:text-white py-8 px-6 rounded-2xl shadow-custom md:w-[800px]">
			{props.userData && (
				<div className="md:grid md:grid-cols-[120px_minmax(900px,_1fr)_100px]">
					<div className="">
						<img
							src={props.userData.avatar_url}
							alt="User Avatar"
							className=" w-28 h-28 rounded-[50%]"
						/>
					</div>
					<div className="md:w-[630px] ">
						<div className="md:grid md:grid-cols-2 md:justify-between md:items-center ">
							<h2 className="text-black font-bold dark:text-white">
								{props.userData.name}
							</h2>
							<p>
								Joined {day} {month} {year}
							</p>
							<p className="text-Primary font-normal dark:font-bold">
								@{props.userData.login}
							</p>
						</div>
						<div>
							<ul className="flex flex-col my-5">{bio}</ul>
						</div>
						<div className="bg-Light dark:bg-bgThird flex justify-between px-8 py-4 mb-8 rounded-xl">
							<h4 className="flex flex-col">
								repos{" "}
								<p className="text-black font-bold text-2xl dark:text-white">
									{props.userData.public_repos}
								</p>
							</h4>
							<h4 className="flex flex-col">
								Followers{" "}
								<p className="text-black font-bold text-2xl dark:text-white">
									{props.userData.followers}
								</p>{" "}
							</h4>
							<h4 className="flex flex-col">
								Following{" "}
								<p className="text-black font-bold text-2xl dark:text-white">
									{props.userData.following}
								</p>
							</h4>
						</div>
						<div className="grid md:grid-cols-2 gap-4 md:justify-between">
							<div className="flex">
								<IconLocate /> {location}
							</div>
							<div className="flex">
								<IconLinkedin />{" "}
								{!props.userData.blog ? (
									<span className="pl-4">Not Available</span>
								) : (
									<a
										href={`${props.userData.blog}`}
										className="ml-4 hover:underline"
									>
										{props.userData.blog}
									</a>
								)}
							</div>
							<div className="flex">
								{" "}
								<IconTwitter />{" "}
								<a
									href={`https://twitter.com//${twitterUsername}`}
									className="ml-4 hover:underline"
								>
									{twitterUsername}
								</a>
							</div>
							<div className="flex">
								{" "}
								<IconWork />{" "}
								<a
									href={`https://github.com/${company}`}
									className="ml-4 hover:underline"
								>
									{company}
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
