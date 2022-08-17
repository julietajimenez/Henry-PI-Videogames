import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import style from './Nav.module.css';


export default function Nav (){

    function refresh(){
        window.location.reload()
    } 

    return(
        <div className={style.nav}>
            <Search/>
            <Link to={'/create'}>
            <button className={style.button}>CREATE VIDEOGAME</button>
            </Link>
            <button className={style.button} onClick={refresh}>REFRESH</button>
            <Link to={'/'}>
            <button className={style.button}>LANDING PAGE</button>
            </Link>
        </div>
    )
}