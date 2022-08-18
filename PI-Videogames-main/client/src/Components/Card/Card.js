import React from "react";
import { Link} from "react-router-dom";
import style from './card.module.css'
import img from './default.jpg'

export default function Card (props){


    return (
        <div className={style.containerDiv}>
                <div className={style.container}>
                    <Link className={style.div}  to={`/detail/${props.id}`}>
                        {props.background_image ? <img className={style.img} src={props.background_image}/> : <img src={img} className={style.imgDefault}/> }
                        <h1 className={style.name}>{props.name}</h1>
                        <div className={style.container2}>
                        <p className={style.p}>{props.generos && props.generos.map(el => el.name + ('  '))}</p>
                        <p className={style.p}>{props.genres &&  props.genres + ('  ')}</p>
                        <p className={style.rating}>{props.rating}⭐</p>
                        </div>
                    </Link> 
                </div>
        </div>
    )
}