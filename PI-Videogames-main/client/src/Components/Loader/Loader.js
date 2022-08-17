import React from "react";
import img from './loader1.gif';
import style from './loader.module.css';

export default function Loader(){
    return(
        <div className={style.loader}>
            <img src={img} className={style.img}/>
        </div>
    )
}