import React from "react";
import style from './paginated.module.css';

export default function Paginated ({videogames, gamesPerPage, paginate}){

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
                        <a onClick={()=>paginate(el)} className={style.a}>{el}</a>
                    </li>
                ))
            }
        </ul>
        </nav>
    )
}