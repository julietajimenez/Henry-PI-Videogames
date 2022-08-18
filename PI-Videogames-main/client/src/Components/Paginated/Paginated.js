import React from "react";
import { useDispatch } from "react-redux";
import style from './paginated.module.css';
import { pagesControl } from "../../Redux/Actions";

export default function Paginated ({videogames, gamesPerPage, paginate}){
const dispatch = useDispatch()
    let numPage = []
    for(var i = 1; i <= Math.ceil(videogames/gamesPerPage); i++){
        numPage.push(i)
    }


    return (
        <nav>
        <ul className={style.pages}>
            {
                numPage && numPage.map(el => (
                    <li key={el} className={style.list}>
                        <a onClick={()=>{
                            paginate(el) 
                            dispatch(pagesControl(el))}}
                            className={style.a}>{el}</a>
                    </li>
                ))
            }
        </ul>
        </nav>
    )
}