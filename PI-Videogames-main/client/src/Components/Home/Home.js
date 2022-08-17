import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllVideogame, getGenre } from '../../Redux/Actions.js'
import Card from "../Card/Card.js";
import FilterGenres from "../Filter/Filter.genre/Filter.genre.js";
import FilterCreatedOrApi from "../Filter/Filter.videogame/Filter.videogame.js";
import Loader from "../Loader/Loader.js";
import OrderAlphabetic from "../Ordering/Order.alphabetic/Order.alphabetic.js";
import OrderRating from "../Ordering/Order.rating/Order.rating.js";
import Paginated from "../Paginated/Paginated.js";
import style from './home.module.css';
import img from './home12-.jpg'
import img2 from '../Nav/refresh.png'

export default function Home (){
    
const dispatch = useDispatch();
useEffect(()=>{
     dispatch(getAllVideogame())
     dispatch(getGenre())
 },[dispatch])


const videogames = useSelector(state=> state.videogames)
const [order, setOrder] = useState('')
const [currentPage, setCurrentPage ] = useState(1)
const [gamesPerPage, setGamesPerPage] = useState(15)
const lastGame = currentPage * gamesPerPage
const firstGame = lastGame - gamesPerPage
const slicePerPage = videogames.slice(firstGame, lastGame)


function paginate (numPage){
    setCurrentPage(numPage)
}



 if(videogames.length <= 0){
    dispatch(getAllVideogame())
    return <Loader/>
} 



    return(
        <div>
            
            <img className={style.img} src={img}/>
            <div className={style.container}>
            <OrderAlphabetic
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}/>
            <OrderRating
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}
            />
            <FilterGenres
            setCurrentPage={setCurrentPage}
            />
            <FilterCreatedOrApi
            setCurrentPage={setCurrentPage}
            />
            </div>
            {
                slicePerPage && slicePerPage.map(el=> {
                    return (
                        <div key={el.id}>
                            <Card

                            id={el.id}
                            name={el.name}
                            background_image={el.background_image}
                            platforms={el.platforms}
                            genres={el.genres}
                            generos={el.generos}
                            rating={el.rating}
                            created = {el.created}
                            />
                        </div>
                    )
                })
            }
            <Paginated
            videogames = {videogames.length}
            gamesPerPage = {gamesPerPage}
            paginate = {paginate}
            />
        </div>
    )
}