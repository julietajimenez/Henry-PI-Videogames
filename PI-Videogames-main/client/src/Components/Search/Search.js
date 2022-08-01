import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/Actions";

export default function Search(){
const [name, setName] = useState('')
const dispatch = useDispatch();

function handleChange(e){
    e.preventDefault()
    setName(e.target.value)
}
function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(name))
}

    return(
        <div>
            <input 
            type={'text'} 
            placeholder={'search by name...'}
            onChange={(e)=>handleChange(e)}
            />
            <button onClick={(e)=>handleSubmit(e)} type='submit'>Search</button>
        </div>
    )
}

