import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenre } from "../../../Redux/Actions";
import style from './filter.genre.module.css';

export default function FilterGenres (props){
    const genres = useSelector(state=> state.genre)
    const dispatch = useDispatch()
    console.log(genres);

    function handleFilter (e){
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
        props.setCurrentPage(1)
        props.setFilter(true)
    }
    return (
        <div> 
            <select className={style.select} onChange={(e)=> handleFilter(e)}>
            <option className={style.option} value={'all'}>ALL GENRES</option> 
                {
                    genres && genres.map(el=> (
                        <option className={style.option} value={el.name} key={el.id}>{el.name}</option>
                    ))
                }
            </select>
        </div>
    )
}