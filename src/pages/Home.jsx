import { Link } from "react-router-dom";
import "../index.css"

function Home() {
    return (
        <>
            <ul class="homeButton">

                <Link to="/ShowCreators"><button>Show Creators</button></Link>

                <Link to="/AddCreator"><button>Add a Creator</button></Link>

            </ul>
        </>
    );
}

export default Home