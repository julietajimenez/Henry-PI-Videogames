import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCreatedOrNot } from "../../../Redux/Actions";
import style from '../Filter.genre/filter.genre.module.css';

export default function FilterCreatedOrApi (props){
const dispatch = useDispatch()


function handleFilter(e){
    e.preventDefault(e)
    dispatch(filterCreatedOrNot(e.target.value))
    props.setCurrentPage(1)

}
    return (
        <div>
            <select className={style.select} onChange={(e)=> handleFilter(e)}>
                <option className={style.option} value={'all'}>ALL VIDEOGAMES</option>
                <option className={style.option} value={'created'}>CREATED</option>
                <option className={style.option} value={'api'}>API</option>
            </select>
        </div>
    )
}