import type { UserData } from '../App';
import { IconLocate, IconTwitter, IconWork, IconLinkedin } from "./Icon";

interface Props {
    user: string;
    bgColor: string;
    userData: UserData | null;
}


function Card(props: Props) {

    let day: number | null = null;
    let month: string | null = null;
    let year: number | null = null;
    if (props.userData !== null) {
        const date = new Date(props.userData.created_at);

        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        day = date.getDate();
        month = months[date.getMonth()];
        year = date.getFullYear();
    }

    let bio: string | null = null;
    if (props.userData !== null) {
        if (props.userData.bio !== null) {
            const description = props.userData.bio;

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
    if (props.userData !== null) {
        if (props.userData.company) {
            company = props.userData.company.replace(/@/, "");
        } else {
            company = "Not Available";
        }
        if (props.userData.location !== null) {
            location = props.userData.location;
        } else {
            location = "Not Available";
        }
        if (props.userData.twitter_username !== null) {
            twitter_username = props.userData.twitter_username;
        } else {
            twitter_username = "Not Available";
        }
        if (props.userData.blog !== "") {
            blog = props.userData.blog;
        } else {
            blog = "Not Available";
        }
    }

    return (
        <div className={`${props.bgColor === 'Light' ? "bg-white text-txtLowContrast" : "bg-bgSecondary text-white"} py-8 px-6 rounded-2xl shadow-custom md:w-[800px] `}>
            {props.userData && (
                <div className="md:grid md:grid-cols-[120px_minmax(900px,_1fr)_100px]">
                    <div className="">
                        <img src={props.userData.avatar_url} alt="User Avatar" className=" w-28 h-28 rounded-[50%]" />
                    </div>
                    <div className="md:w-[630px] ">
                        <div className="md:grid md:grid-cols-2 md:justify-between md:items-center ">
                            <h2 className={`${props.bgColor === 'Light' ? "text-black font-bold" : "text-white"}`}>{props.userData.name}</h2>
                            <p>Joined {day} {month} {year}</p>
                            <p className={`${props.bgColor === 'Light' ? "text-Primary font-normal" : "text-Primary font-bold"}`}>@{props.userData.login}</p>
                        </div>
                        <div className="">
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
                        <div className={`${props.bgColor === 'Light' ? "bg-Light" : "bg-bgThird"} flex justify-between px-8 py-4 mb-8 rounded-xl`}>
                            <h4 className="flex flex-col">repos <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{props.userData.public_repos}</p></h4>
                            <h4 className="flex flex-col">Followers <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{props.userData.followers}</p> </h4>
                            <h4 className="flex flex-col">Following <p className={`${props.bgColor === 'Light' ? "text-black font-bold text-2xl" : "text-2xl"}`}>{props.userData.following}</p></h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 md:justify-between">
                            <div className="flex"><IconLocate /> {location}</div>
                            <div className="flex"><IconLinkedin /> <a href="${blog}" className="ml-4 hover:underline">{blog}</a></div>
                            <div className="flex"> <IconTwitter /> <a href={`https://twitter.com//${twitter_username}`} className="ml-4 hover:underline">{twitter_username}</a></div>
                            <div className="flex"> <IconWork /> <a href={`https://github.com/${company}`} className="ml-4 hover:underline">{company}</a></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;