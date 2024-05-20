import { useState } from "react";
import { MoonIcon, SunIcon } from "../components/Icon";

function Heading() {
	const [theme, setTheme] = useState("light");

	const changeToDark = () => {
		setTheme("dark");
		document.body.className = "dark";
	};

	const changeToLight = () => {
		setTheme("light");
		document.body.className = "";
	};

	return (
		<div className="flex justify-between items-center mx-5">
			<h1 className="dark:text-white text-Dark text-3xl">devfinder</h1>

			{theme === "light" ? (
				<button
					type="button"
					className="p-[2.5px]"
					onClick={() => changeToDark()}
				>
					<span className="flex text-Dark hover:text-txtLowContrast">
						Dark <MoonIcon />
					</span>
				</button>
			) : (
				<button
					type="button"
					className="p-[2.5px]"
					onClick={() => changeToLight()}
				>
					<span className="flex text-white hover:text-txtLowContrast">
						Light <SunIcon />
					</span>
				</button>
			)}
		</div>
	);
}

export default Heading;
