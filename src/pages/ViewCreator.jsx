import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "../index.css"

function ViewCreator() {
    const { creatorName } = useParams();
    
    const navigate = useNavigate();
   
    const [ creator_data, setData ] = useState([]);

    useEffect(() => {
        const show_creator = async () => {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .eq('name',creatorName)

            if (error){
                console.log(error.message);
            } else {
                setData(data);
                console.log("creator found!",data);
            }
        };
    show_creator();
    },[creatorName]);

    return(
        <>
        <Nav />
            <h1 className="title">View Creator: {creatorName}</h1>
            <div class="cards">
                {creator_data.map((creator)=> (
                        <div key={creator.name} className="card">

                            <h2 className="cardName">{creator.name}</h2>

                            <a href={creator.url} target="_blank">
                            {creator.name}'s Channel
                            </a>

                            <p>{creator.description}</p>
                            
                            <img src={creator.imageURL}alt={creator.name}></img>            

                        <div className="links">
                            <Link to={`/EditCreator/${creator.name}`}>Edit profile</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ViewCreator;