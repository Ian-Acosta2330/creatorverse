import { Link } from "react-router-dom";
import "../index.css"
import ShowCreators from "./ShowCreators";

function Home() {
    return (
        <>
            <ul class="homeButton">

                <Link to="/ShowCreators"><button>Show Creators</button></Link>

                <Link to="/AddCreator"><button>Add a Creator</button></Link>

            </ul>

            <div className="container">
                <ShowCreators />
            </div>
            
        </>
    );
}

export default Home