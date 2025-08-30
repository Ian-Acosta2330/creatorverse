import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "../index.css"

function EditCreator() {

    const [editField, setEditing] = useState("");

    const { creatorName } = useParams();
    
    const [newName, setNewName] = useState("");
    const [newURL, setNewURL] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newImage, setNewImage] = useState("")

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

    //change name
    async function edit_creator_name(event){
        const { error} = await supabase
            .from('creators')
            .update({name : newName})
            .eq('name', creator_data[0]?.name)

            if (error){
                console.log(error);
            } else {
                console.log("UPDATED NAME",);
                navigate("/ShowCreators")
            }
    }

    //change url
    async function edit_creator_URL(event){
        const { error} = await supabase
            .from('creators')
            .update({url : newURL})
            .eq('name', creator_data[0]?.name)

            if (error){
                console.log(error);
            } else {
                console.log("UPDATED URL",);
                navigate("/ShowCreators")
            }
    }

    //change description
    async function edit_creator_desc(event){
        const { error} = await supabase
            .from('creators')
            .update({description : newDesc})
            .eq('name', creator_data[0]?.name)

            if (error){
                console.log(error);
            } else {
                console.log("UPDATED Description",);
                navigate("/ShowCreators")
            }
    }

    //change image
    async function edit_creator_image(event){
        const { error} = await supabase
            .from('creators')
            .update({imageURL : newImage})
            .eq('name', creator_data[0]?.name)

            if (error){
                console.log(error);
            } else {
                console.log("UPDATED IMAGE",);
                navigate("/ShowCreators")
            }
    }

    async function delete_creator(name){
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('name', creator_data[0]?.name)

            if (error){
                console.log(error);
            } else {
                console.log("DELETED CREATOR!!",);
                navigate("/ShowCreators")
            }
    }

    return(
        <>
        <Nav />
            <h1 className="title">Edit Creator: {creatorName}</h1>
                {creator_data.map((creator)=> (
                    <div class="editCard">
                        <div className="topEdit">
                            <div className="nameCard">
                                {creator.name}{" "}
                                {editField === "name" ?(
                                    <input type="text" name="newName" value={newName} onChange={(e)=>setNewName(e.target.value)}
                                    placeholder={creator.name}
                                    onKeyDown={(e)=> {
                                        if(e.key==="Enter"){
                                            edit_creator_name(newName);
                                            setEditing("");
                                        }
                                        
                                    }}
                                    onBlur={()=>setEditing("")}
                                    autoFocus
                                    />
                                ) : (
                                    <button onClick={() => setEditing("name")}>Update Name</button>
                                )}
                            </div>
                                        

                            <div className="urlCard">
                                {creator.url}{" "}
                                {editField === "url" ? (
                                    <input type="text" name="newURL" value={newURL} onChange={(e)=>setNewURL(e.target.value)}
                                    placeholder={creator.url}
                                    onKeyDown={(e)=> {
                                        if(e.key==="Enter"){
                                            edit_creator_URL(newURL);
                                            setEditing("");
                                        }
                                        
                                    }}
                                    onBlur={()=>setEditing("")}
                                    autoFocus
                                    />
                                ) : (
                                    <button onClick={() => setEditing("url")}>Update Channel Link</button>
                                )}
                            </div>
                        </div>

                        <div className="imgCard">
                            <img src={creator.imageURL}></img>{" "}
                            {editField ==="imageURL" ? (
                                <input type="text" name="newImage" value={newImage} onChange={(e)=>setNewImage(e.target.value)}
                                placeholder={creator.imageURL}
                                onKeyDown={(e)=> {
                                    if(e.key==="Enter"){
                                        edit_creator_image(newImage);
                                        setEditing("");
                                    }
                                    
                                }}
                                onBlur={()=>setEditing("")}
                                autoFocus
                                />
                            ) : (
                                <button onClick={() => setEditing("imageURL")}>Update Image</button>
                            )}
                        </div>    


                        <div className="descCard">
                            {creator.description}{" "}
                            {editField ==="description" ? (
                                <input type="text" name="newDesc" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)}
                                placeholder={creator.description}
                                onKeyDown={(e)=> {
                                    if(e.key==="Enter"){
                                        edit_creator_desc(newDesc);
                                        setEditing("");
                                    }
                                    
                                }}
                                onBlur={()=>setEditing("")}
                                autoFocus
                                />
                            ) : (
                                <button onClick={() => setEditing("description")}>Update Description</button>
                            )}
                        </div>


                        
                        <div className="delButton">
                            <button onClick={() => delete_creator(creator.name)}>DELETE CREATOR</button>
                        </div>

                    </div>
                ))}
        </>
    );
};

export default EditCreator;