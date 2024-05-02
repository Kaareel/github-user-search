import { useEffect, useState } from "react";
import { IconLocate, IconTwitter, IconWork, IconLinkedin } from "./Icon";

interface Props {
    user: string;
    bgColor: string;
}
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

function Card(props: Props) {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!props.user) return;
            try {
                const response = await fetch(`https://api.github.com/users/${props.user}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData();
    }, [props.user]
    )

    let day: number | null = null;
    let month: string | null = null;
    let year: number | null = null;
    if (userData !== null) {
        const date = new Date(userData.created_at);

        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        day = date.getDate();
        month = months[date.getMonth()];
        year = date.getFullYear();
    }

    let bio: string | null = null;
    if (userData !== null) {
        if (userData.bio !== null) {
            const description = userData.bio;

            const lines = description ? description.split(/\r?\n/) : [description];

            const filteredLines = lines.filter(line => typeof line === 'string' && line.trim() !== '');

            const interestsList = filteredLines.map(line => {
                const interest = line.trim();
                return interest;
            });
            bio = interestsList.join(', ');
        } else {
            bio = "This profile has no bio";
        }
    }
    let location: string | null = null;
    let twitter_username: string | null = null;
    let company: string | null = null;
    let blog: string | null = null;
    if (userData !== null) {
        if (userData.company) {
            company = userData.company.replace(/@/, "");
        } else {
            company = "Not Available";
        }
        if (userData.location !== null) {
            location = userData.location;
        } else {
            location = "Not Available";
        }
        if (userData.twitter_username !== null) {
            twitter_username = userData.twitter_username;
        } else {
            twitter_username = "Not Available";
        }
        if (userData.blog !== "") {
            blog = userData.blog;
        } else {
            blog = "Not Available";
        }
    }
    console.log(userData?.bio)


    return (
        <div className={`${props.bgColor === 'Light' ? "bg-white text-txtLowContrast" : "bg-bgSecondary text-white"} py-8 px-6 rounded-2xl shadow-custom`}>
            {userData && (
                <div className="flex">
                    <div className="mr-9">
                        <img src={userData.avatar_url} alt="User Avatar" className=" w-28 rounded-[50%] " />
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="flex justify-between">
                                <h2 className={`${props.bgColor === 'Light' ? "text-black font-bold" : "text-white"}`}>{userData.name}</h2>
                                <p>Joined {day} {month} {year}</p>
                            </div>
                            <p className={`${props.bgColor === 'Light' ? "text-Primary font-normal" : "text-Primary font-bold"}`}>@{userData.login}</p>
                            <ul className="flex flex-col my-5">
                                {bio !== null ? (
                                    bio.split(',').map((interest, index) => (
                                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        <li key={index}>{interest}</li>
                                    ))
                                ) : (
                                    <li>{bio}</li>
                                )}
                            </ul>
                        </div>
                        <div className={`${props.bgColor === 'Light' ? "bg-Light" : "bg-bgThird"} flex justify-between px-8 py-4 mb-9`}>
                            <p className="flex flex-col">repos <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{userData.public_repos}</p></p>
                            <p className="flex flex-col">Followers <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{userData.followers}</p> </p>
                            <p className="flex flex-col">Following <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{userData.following}</p></p>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex flex-col gap-4">
                                <p className="flex "><IconLocate /> {location}</p>
                                <p className="flex "><IconLinkedin /> <a href="${blog}" className="ml-4 hover:underline">{blog}</a></p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="flex "> <IconTwitter /> <a href={`https://twitter.com//${twitter_username}`} className="ml-4 hover:underline">{twitter_username}</a></p>
                                <p className="flex "> <IconWork /> <a href={`https://github.com/${company}`} className="ml-4 hover:underline">{company}</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;