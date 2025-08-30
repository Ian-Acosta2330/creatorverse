import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

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
    

    return(
        <>
            <h1>Show Creators</h1>
            <div>
                <ul>
                    {all_creators.map((creator)=>(
                        <>
                            <li key={creator.name}>{creator.name} |
                            <a href={creator.url} target="_blank">{creator.name}'s Channel</a> |
                            {creator.description}
                            <br></br>
                            <img src={creator.imageURL}></img> <br></br></li>
                            <li><Link to={`/EditCreator/${creator.name}`}>Edit profile</Link></li>
                            <li><Link to={`/ViewCreator/${creator.name}`}>View profile</Link></li>
                        </>
                    ))}
                    

                </ul>
                
            </div>
        </>
    );
};

export default ShowCreators;