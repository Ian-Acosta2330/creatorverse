import { NavLink } from "react-router-dom";
import "../index.css"

const Nav = () => {
    return (
        <nav>
            {/* <ul>
                <li>
                    <NavLink to="/" class="contrast">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ShowCreators"class="contrast">Show Creators</NavLink>
                </li>
                <li>
                    <NavLink to="/AddCreator"class="contrast">Add Creator</NavLink>
                </li>

            </ul> */}
            <NavLink to="/" class="contrast">Home</NavLink>
            <NavLink to="/ShowCreators"class="contrast">Show Creators</NavLink>
            <NavLink to="/AddCreator"class="contrast">Add Creator</NavLink>
        </nav>
    )
};
export default Nav;