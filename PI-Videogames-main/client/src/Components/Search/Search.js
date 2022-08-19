import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { getByName} from "../../Redux/Actions";
import style from './search.module.css'

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
            <button className={style.button} onClick={(e)=>handleSubmit(e)} type='submit'>SEARCH</button>
            <input 
            className={style.input}
            type={'text'} 
            placeholder={'search by name...'}
            onChange={(e)=>handleChange(e)}
            />
        </div>
    )
}

