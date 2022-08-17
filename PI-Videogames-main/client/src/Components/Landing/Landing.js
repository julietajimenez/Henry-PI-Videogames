import React from "react";
import { Link } from "react-router-dom";
import style from './landing.module.css'
import gif from './gif15.png';

export default function Landing(){
    return(
        <div>
            <img className={style.gif} src={gif}/>
            <Link to={'/home'}>
            <button className={style.button}>Start</button>
            </Link>
        </div>
    )
}