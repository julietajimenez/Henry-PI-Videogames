import React, { useState } from "react";
import { useDispatch/* , useSelector */ } from "react-redux";
import { getByName, /* pagesControl  */} from "../../Redux/Actions";
import style from './search.module.css'

export default function Search(){
const [name, setName] = useState('')
const dispatch = useDispatch();
//const page = useSelector(state=> state.pages)

function handleChange(e){
    e.preventDefault()
    setName(e.target.value)

}
function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(name))
    //dispatch(pagesControl(page))
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

