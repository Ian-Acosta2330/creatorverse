import { useState, useEffect } from "react";
import { supabase } from "../client";

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
                    <li key={creator.name}>{creator.name} | {creator.url} | {creator.description} | <img src={creator.imageURL}></img> <br></br><br></br></li>
                    ))}
                </ul>
                
            </div>
        </>
    );
};

export default ShowCreators;