import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import "../index.css"
import Nav from "../components/Nav";

function ShowCreators() {

    const [all_creators, setCreators] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        const show_creators = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()

            if (error){
                setError(error.message);
            } else {
                setCreators(data);
                console.log("All Creators Displayed!");
            }
        };
    show_creators();

    }, []);

    if (error) {
        return <div>Error:{error}</div>;
    }
    
    if (!all_creators) {
        return <h1>No Creators!</h1>;
    }
    return(
        <>
            <Nav />
            <h1 className="title">Show Creators</h1>
            <div class="cards">
                {all_creators.map((creator)=>(
                    <div key={creator.name} className="card">
                        
                        <h2 className="cardName">{creator.name}</h2>
                        
                        <a href={creator.url} target="_blank">
                        {creator.name}'s Channel
                        </a>

                        <p>{creator.description}</p>
                        
                        <img src={creator.imageURL}alt={creator.name}></img>

                        <div className="links">
                            <Link to={`/EditCreator/${creator.name}`}>EDIT PROFILE</Link>
                            <Link to={`/ViewCreator/${creator.name}`}>VIEW PROFILE</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShowCreators;