import { MoonIcon, SunIcon } from "../components/Icon";

interface Props{
    setBgColor: (color: string) => void;
    bgColor: string;
}

function Heading(props: Props) {
    const ToggleColor = () => {
      props.setBgColor(props.bgColor === 'Light' ? 'Dark' : 'Light');
    };
    return (
        <div className="flex justify-between items-center mx-5">
          <h1 className={`${props.bgColor === 'Light' ? "text-textColorLight" : "text-textColorDark"} text-3xl`}>devfinder</h1>
          
          <button type="button" className="p-[2.5px]" onClick={ToggleColor}>{props.bgColor === 'Light' ? (<span className="flex text-textColorSecondary hover:text-black">Dark <MoonIcon/></span>): (<span className="flex text-textColorDark hover:text-textColorSecondary">Light <SunIcon/></span>)}</button>
        </div>
    )
}

export default Heading;