import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";

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
            <h1>View Creator: {creatorName}</h1>
            <ul>
                {creator_data.map((creator)=> (
                    <>
                        <li> {/*For Editing Name*/}
                            {creator.name}{" "}

                        </li> 

                        <li>
                            {creator.url}{" "}

                        </li> 

                        <li>
                            {creator.description}{" "}
                            
                        </li> 

                        <li>
                            <img src={creator.imageURL}></img>
                           
                        </li>        

                        <li><Link to={`/EditCreator/${creator.name}`}>Edit profile</Link></li>                                                               

                    </>
                ))}
            </ul>
        </>
    );
};

export default ViewCreator;