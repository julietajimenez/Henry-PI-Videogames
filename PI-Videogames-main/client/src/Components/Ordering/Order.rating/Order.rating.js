import React from "react";
import { useDispatch } from "react-redux";
import { orderRating } from "../../../Redux/Actions";
import style from '../../Filter/Filter.genre/filter.genre.module.css'

export default function OrderRating (props){
const dispatch = useDispatch()

function handleOrder (e){
    e.preventDefault()
    dispatch(orderRating(e.target.value))
    props.setCurrentPage(1)
    props.setOrder(`ordering ${e.target.value}`)
}

    return (
        <div>
            <select className={style.select} onChange={(e)=>handleOrder(e)}>
                <option className={style.option} value={''}>ORDER RATING</option>
                <option className={style.option} value={'asc'}>lower to higher rating</option>
                <option className={style.option} value={'desc'}>higher to lower rating</option>
            </select>
        </div>
    )
}