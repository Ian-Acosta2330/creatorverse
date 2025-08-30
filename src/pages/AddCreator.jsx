import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "../index.css"

function AddCreator() {
    const [c_name,setName]=useState("");
    const [c_desc, setDesc]=useState("");
    const [c_url, setUrl] = useState("");
    const [c_img, setImg]=useState("");

    const navigate = useNavigate();

    async function add_creator(event){
        event.preventDefault();
        const { data, error } = await supabase
            .from('creators')
            .insert({name: c_name, url: c_url, description: c_desc, imageURL:c_img}); //add to table supabase

            if (error){
                console.log(error);
                alert("Creator already exists!")
                navigate("/")
            } else {
                console.log("Row added!");
                navigate("/")
            }
        // clear the text fields
        setName('');
        setDesc('');
        setUrl('');
        setImg('');
    }

    // set up form for adding creator's fields
    return(
        <>
            <Nav />
            <h1 className="title">Add a Creator</h1>
            <form onSubmit={add_creator}>
                <div className="fieldList">
                    <label className="newField">
                        Creator Name:
                        <textarea name="c_name" value={c_name} onChange={(event)=>setName(event.target.value)}/>
                    </label><br></br>
                    
                    <label className="newField">
                        Creator's URL: 
                        <textarea name="c_url" value={c_url} onChange={(event)=>setUrl(event.target.value)}/>
                    </label>
                    
                    <label className="newField">
                        Creator's Description:
                        <textarea name="c_desc" value={c_desc} onChange={(event)=>setDesc(event.target.value)}/>
                    </label>

                    <label className="newField">
                        Image URL:
                        <textarea name="c_img" value={c_img} onChange={(event)=>setImg(event.target.value)}/>
                    </label>
                    
                    <button type="submit">Add Creator</button>
                </div>
            </form>
        </>
    );
};

export default AddCreator;