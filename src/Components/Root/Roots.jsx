import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Roots = () => {
    return (
        <div className="p-2 fonts-work ">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Roots;