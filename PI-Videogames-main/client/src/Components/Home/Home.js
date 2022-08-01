import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllVideogame, getGenre } from '../../Redux/Actions.js'
import Card from "../Card/Card.js";


export default function Home (){
const dispatch = useDispatch();
const videogames = useSelector(state=> state.videogames)


useEffect(()=>{
    dispatch(getAllVideogame())
    dispatch(getGenre())
},[dispatch])

    return(
        !videogames ? <div>Loading...</div> : 
        (<div>
            {
                videogames && videogames.map(el=> {
                    return (
                        <div >
                            <Card
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            background_image={el.background_image}
                            genres={el.genres}
                            generos={el.generos}
                            />
                        </div>
                    )
                })
            }
        </div>)
    )
}