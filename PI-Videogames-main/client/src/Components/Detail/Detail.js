import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, removeDetail } from "../../Redux/Actions";
import style from "./detail.module.css"

export default function Detail (props){
const dispatch = useDispatch()
const detail = useSelector(state=> state.detail)
const id = props.match.params.id

useEffect(()=>{
dispatch(getById(id))
dispatch(removeDetail())
},[dispatch, id])

    return(
        detail.name ? 
        <div>
            <h1>{detail.name}</h1>
            <img className={style.img} src={detail.background_image}/>
            <p>{detail.genres && detail.genres + (' ')}</p>
            <p>{detail.generos && detail.generos.map(el=> el.name + (' '))}</p>
            <p>{detail.description}</p>
            <p>{detail.released}</p>
            <p>{detail.rating}</p>
            <p>{detail.platforms}</p>
        </div> 
        : <h1>Loading...</h1>
    )
}