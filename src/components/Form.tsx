import { SearchIcon } from "../components/Icon";
interface Props { }

function Form(props: Props) {
    return (
        <form className="flex items-center bg-Secondary p-2 mt-9 mb-4 border rounded-2xl w-full">
            <SearchIcon />
            <input type="text" className="w-full py-[6px]" placeholder="Search GitHub username..." />
            <button className="bg-Primary border rounded-[10px] px-4 py-3 text-white">Search</button>
        </form>
    )
}
export default Form;