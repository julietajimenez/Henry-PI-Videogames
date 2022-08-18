import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, pagesControl, removeDetail } from "../../Redux/Actions";
import {useHistory} from 'react-router-dom';
import style from "./detail.module.css";
import img from '../Card/default.jpg';

export default function Detail (props){
const history = useHistory() 
const dispatch = useDispatch()
const detail = useSelector(state=> state.detail)
const page = useSelector(state=> state.pages)
const id = props.match.params.id


useEffect(()=>{
dispatch(getById(id))
return () => {
    dispatch(removeDetail())
}
},[dispatch, id])

    return(
        detail.name ? 
        <div>
            {detail.background_image ? <img className={style.img} src={detail.background_image}/> : <img src={img} className={style.img}/> }
            <div className={style.container}>
                <h1>{detail.name}</h1>
                <p>GENRES: {detail.genres && detail.genres + (' ')}</p>
                <p>{detail.generos && detail.generos.map(el=> el.name + (' '))}</p>
                <p className={style.description}>DESCRIPTION: {detail.description}</p>
                <p className={style.description}>{detail.description_raw}</p>
                <p>RELEASED: {detail.released}</p>
                <p>{detail.rating}⭐</p>
                <p>PLATFORMS: {detail.platforms}</p>
            </div>
            <button className={style.button} onClick={()=>{
                                            history.push('/home')
                                            dispatch(pagesControl(page))
                                            }}>HOME</button>
        </div> 
        : <h1 className={style.loading}>LOADING...</h1>
    )
}