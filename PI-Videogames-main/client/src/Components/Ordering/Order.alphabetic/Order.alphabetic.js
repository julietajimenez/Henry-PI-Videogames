import React from "react";
import { useDispatch } from "react-redux";
import { order_Alphabetic } from "../../../Redux/Actions";
import style from '../../Filter/Filter.genre/filter.genre.module.css';

export default function OrderAlphabetic(props){
const dispatch = useDispatch()

    function handleOrder(e){
        e.preventDefault()
        dispatch(order_Alphabetic(e.target.value))
        props.setCurrentPage(1);
        props.setOrder(`order ${e.target.value}`)
    }

    return (
        <div>
            <select className={`${style.select} ${style.firstSelect}`} onChange={(e)=> handleOrder(e)}>
                <option className={style.option} value={'all'}>ORDER ALPHABETIC</option>
                <option className={style.option} value={'asc'}>A-Z</option>
                <option className={style.option} value={'desc'}>Z-A</option>
            </select>
        </div>
    )
}
//Sorting