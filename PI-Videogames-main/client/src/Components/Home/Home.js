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
import img from './home12-.jpg';
//import img from './home4-2.jpg';

export default function Home (){
const dispatch = useDispatch();

/* useEffect(()=>{
    dispatch(getAllVideogame())
    dispatch(getGenre())
},[dispatch])
 */
const videogames = useSelector(state=> state.videogames)
const filtered = useSelector(state=>state.filtered)
const [filter, setFilter] = useState(false)
const page = useSelector(state=> state.pages)
const [order, setOrder] = useState('')
const [currentPage, setCurrentPage ] = useState(page)
const [gamesPerPage, setGamesPerPage] = useState(15)
const lastGame = currentPage * gamesPerPage
const firstGame = lastGame - gamesPerPage
//const slicePerPage = videogames.slice(firstGame, lastGame)
var allVideogames = []
if(filtered.length){
    allVideogames = filtered
} else if(filter === true){
    allVideogames = videogames
} else {
    allVideogames = videogames
}
const slicePerPage = allVideogames?.slice(firstGame, lastGame)


useEffect(()=>{
    dispatch(getAllVideogame())
    dispatch(getGenre())
   
},[dispatch])

useEffect(()=>{
    setCurrentPage(page)
}, [page])


function paginate (numPage){
    setCurrentPage(numPage)
}

/*  const validateCards = () =>{
        if(videogamesFilter.length && Array.isArray(videogamesFilter)){
            allGames = videogamesFilter;
            return <Cards videogames={videogamesFilter?.slice(firstIndex, lastIndex)} />
        }else if(filter === true){ 
            allGames = videogames;
            return(<><span className={s.spanError}>Juego no encontrado</span> <Cards videogames={videogames?.slice(firstIndex,lastIndex)}/> </>)
        }else {
            allGames = videogames;
            return <Cards videogames={videogames?.slice(firstIndex, lastIndex)}/>
        }
    } */


 if(videogames.length <= 0){
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
            setFilter ={setFilter}
            />
            <FilterCreatedOrApi
            setCurrentPage={setCurrentPage}
            setFilter={setFilter}
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