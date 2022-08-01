import axios from 'axios'



export const getAllVideogame = () => {
    return async (dispatch)=> {
        try {
            let res = await axios('http://localhost:3001/videogame/')
            return dispatch({
            type: 'GET_VIDEOGAMES', 
            payload: res.data
        })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getByName = (name) => {
    try {
        return async(dispatch)=>{
            let res = await axios(`http://localhost:3001/videogame/byName?name=${name}`)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}


export const getById = (id) => {
    return async (dispatch)=>{
        let res = await axios(`http://localhost:3001/videogame/${id}`)
        console.log(res.data);
        return dispatch({
            type: 'GET_BY_ID',
            payload: res.data
        })
    }
}

export const removeDetail = () => {
    return {
        type: 'REMOVE_DETAIL'
    }
}


export const getGenre = () =>{
    return async(dispatch)=>{
        const res = await axios('http://localhost:3001/genre')
        return dispatch({
            type: 'GET_GENRE',
            payload: res.data
        })
    }
}


export const createVideogames = (payload) => {
    try {
        return async(dispatch)=> {
            const res = await axios('http://localhost:3001/videogame/create', payload)
            console.log(res.data);
            dispatch({
                type: 'CREATE_VIDEOGAME',
                payload: res.payload
            })
        }
    } catch (error) {
        console.log(error);
    }
}