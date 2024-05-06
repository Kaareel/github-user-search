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
          <h1 className={`${props.bgColor === 'Light' ? "text-Dark" : "text-white"} text-3xl`}>devfinder</h1>
          <button type="button" className="p-[2.5px]" onClick={ToggleColor}>{props.bgColor === 'Light' ? (<span className="flex text-txtLowContrast hover:text-black">Dark <MoonIcon/></span>): (<span className="flex text-white hover:text-txtLowContrast">Light <SunIcon/></span>)}</button>
        </div>
    )
}

export default Heading;