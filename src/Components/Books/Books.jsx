import { MdKeyboardArrowDown } from "react-icons/md";
import Readbookdata from "./Readbookdata";
import Whitebooklist from "./Whitebooklist";
const Books = () => {
    return (
        <div>
            <div className="text-black text-4xl font-extrabold mb-2 p-10 items-center text-center m-4 rounded-3xl bg-slate-500">
                <h2>Books</h2>
            </div>

            <div className="grid justify-center">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white m-1">Sort By <MdKeyboardArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a> Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Readbookdata></Readbookdata>

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Whitebooklist></Whitebooklist>
                </div>
            </div>
        </div>




    );
};

export default Books;