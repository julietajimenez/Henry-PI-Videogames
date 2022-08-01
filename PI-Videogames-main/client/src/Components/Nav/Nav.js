import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

export default function Nav (){
    return(
        <div>
            <Search/>
            <Link to={'/create'}>
            <button>Create Videogame</button>
            </Link>
        </div>
    )
}