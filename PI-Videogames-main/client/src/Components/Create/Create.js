import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogame, getGenre } from "../../Redux/Actions";

export default function Create (){
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: []
    })
const dispatch = useDispatch()
const videogames = useSelector(state=>state.videogames)
const genre = useSelector(state=>state.genre)




function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}



    return (
        <form>
            <label>Name: </label>
            <input type={'text'} name={'name'} value={input.name} onChange={(e)=>handleChange(e)}/>
            <label>Description: </label>
            <input type={'text'} name={'description'} value={input.description} onChange={(e)=>handleChange(e)}/>
            <label>Released: </label>
            <input type={'text'} name={'released'} value={input.released} onChange={(e)=>handleChange(e)}/>
            <label>Rating: </label>
            <input type={'text'} name={'rating'} value={input.rating} onChange={(e)=>handleChange(e)}/>
            
            <select>
                <option>Select platform</option>
                <option></option>
            </select>
            <select>
                <option>Select genre</option>
                {
                genre && genre.map(el => {
                    return(
                        <option>{el.name}</option>
                    )
                })
            }
            </select>
        </form>
    )
}