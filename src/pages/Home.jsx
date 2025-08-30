import { Link } from "react-router-dom";
import "../index.css"

function Home() {
    return (
        <>
            <ul>
                <li> <Link to="/ShowCreators">Show Creators</Link> </li>
                <li> <Link to="/AddCreator">Add a Creator</Link> </li>
            </ul>
        </>
    );
}

export default Home