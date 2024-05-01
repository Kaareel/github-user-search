import { SearchIcon } from "../components/Icon";
interface Props {
    setUser: (user: string) => void;
    bgColor: string;
 }

function Form(props: Props) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleChangeUser = (e: any) => {
        const value = e.target.value
        props.setUser(value)
        console.log(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        //className="flex items-center bg-Secondary p-2 mt-9 mb-4 border rounded-2xl w-full"
        <form onSubmit={handleSubmit} className={`${props.bgColor === 'Light' ? "bg-white text-txtLowContrast" : "bg-bgSecondary text-white"} flex items-center p-2 mt-9 mb-4 border rounded-2xl w-full`}>
            <SearchIcon />
            <input type="text" className={`${props.bgColor === 'Light' ? "bg-white" : "bg-bgSecondary"} w-full py-[6px] mr-5`} placeholder="Search GitHub username..." onChange={handleChangeUser}/>
            <button type="submit"  className="bg-Primary border rounded-[10px] px-4 py-3 text-white">Search</button>
        </form>
    )
}
export default Form;