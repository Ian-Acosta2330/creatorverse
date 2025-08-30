import { NavLink } from "react-router-dom";
import "../index.css"

const exclude = ["/"];

function Nav() {

    const pathName= window.location.pathname;
    console.log(pathName);

    if (exclude.some(item => pathName === item ) ) {return null;}

    return (
        <nav>
            <NavLink to="/" class="contrast">Home</NavLink>
            <NavLink to="/ShowCreators"class="contrast">Show Creators</NavLink>
            <NavLink to="/AddCreator"class="contrast">Add Creator</NavLink>
        </nav>
    )
};

export default Nav;