import { Outlet, useLocation} from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
    
    return (
        <>
            <Nav />
            <div>
                <Outlet />
            </div>
        </>
    );
}