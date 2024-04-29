import { SearchIcon } from "../components/Icon";
interface Props {
    setUser: (user: string) => void;
 }

function Form(props: Props) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleChangeUser = (e: any) => {
        const value = e.target.value
        props.setUser(value)
        console.log(value)
    }
    return (
        <form className="flex items-center bg-Secondary p-2 mt-9 mb-4 border rounded-2xl w-full">
            <SearchIcon />
            <input type="text" className="w-full py-[6px]" placeholder="Search GitHub username..." onChange={handleChangeUser}/>
            <button type="button" className="bg-Primary border rounded-[10px] px-4 py-3 text-white">Search</button>
        </form>
    )
}
export default Form;