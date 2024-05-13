import { SearchIcon } from "../components/Icon";
interface Props {
    setUser: (user: string) => void;
    user: string;
    bgColor: string;
    errorMessage: string;
}

function Form(props: Props) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const value = formData.get('search') as string;
        props.setUser(value);
    }
    return (
        <form onSubmit={handleSubmit} className={`${props.bgColor === 'Light' ? "bg-white text-txtLowContrast" : "bg-bgSecondary text-white"} flex items-center p-2 mt-9 mb-4 border rounded-2xl w-full shadow-custom`}>
            <SearchIcon />
            <input type="text" name="search" className={`${props.bgColor === 'Light' ? "bg-white" : "bg-bgSecondary"} w-full py-[6px] mr-5`} placeholder="Search GitHub username..." />
            {!props.user ? (
                <p className="text-red-500 text-sm">Empty Field</p>
            ) : props.errorMessage ? (
                <p className="text-red-500 text">{props.errorMessage}</p>
            ) : null}
            <button type="submit" className="bg-Primary border rounded-[10px] px-4 py-3 text-white">Search</button>
        </form>

    )
}
export default Form;