import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ShowCreators">Show Creators</NavLink>
                </li>
                <li>
                    <NavLink to="/AddCreator">Add Creator</NavLink>
                </li>
            </ul>
        </nav>
    )
};
export default Nav;