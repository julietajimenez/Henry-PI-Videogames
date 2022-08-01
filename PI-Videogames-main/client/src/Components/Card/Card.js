import React from "react";
import { Link } from "react-router-dom";
import style from './card.module.css'

export default function Card (props){
   console.log(props);
    return (
        <div>
           <Link to={`/detail/${props.id}`}>
            <h1>{props.name}</h1>
            <img className={style.img} src={props.background_image}/>
            <h4>{props.generos && props.generos.map(el => el.name + (' '))}</h4>
            <h4>{props.genres &&  props.genres + (' ')}</h4>
           </Link> 
        </div>
    )
}