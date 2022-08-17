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
/* export const getAllVideogame = ()=> {
    return (dispatch)=> {
    return axios('http://localhost:3001/videogame/')
    .then(res => dispatch=>({
        type: 'GET_VIDEOGAMES', 
        payload: res.data
    }))
}
} */

export const getByName = (name) => {
    return async(dispatch)=>{
        try {
            let res = await axios(`http://localhost:3001/videogame/byName?name=${name}`)
            console.log(res.data);
            if (!res.data.length){
                alert("Error: Game name was not found...");
            }
            else{
                return dispatch({
                    type: 'GET_BY_NAME',
                    payload: res.data
                })
            }
        } catch (error) {
            console.log(error);
        }
}
}
/* 
export const getByName = (name)=> {
    return (dispatch)=> {
        return axios(`http://localhost:3001/videogame/byName?name=${name}`)
        .then (res=> dispatch({
            type: 'GET_BY_NAME',
            payload: res.data
        }))
    }
}
*/
export const getById = (id) => {
    try {
        return async (dispatch)=>{
            let res = await axios(`http://localhost:3001/videogame/${id}`)
            return dispatch({
                type: 'GET_BY_ID',
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}
/* 
export const getById=(id)=> {
    return (dispatch)=> {
        return axios(`http://localhost:3001/videogame/${id}`)
        .then(res=> dispatch({
            type: 'GET_BY_ID',
            payload: res.data
        }))
    }
}
*/
export const removeDetail = () => {
    return {
        type: 'REMOVE_DETAIL'
    }
}


export const getGenre = () =>{
    try {
        return async(dispatch)=>{
            const res = await axios('http://localhost:3001/genre')
            return dispatch({
                type: 'GET_GENRE',
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}
/* 
export const getGenre = ()=> {
    return (dispatch) => {
        return axios('http://localhost:3001/genre')
        .then(res=> dispatch({
            type: 'GET_GENRE',
            payload: res.data
        }))
    }
    */
export const createVideogames = (payload) => {
    try {
        return async(dispatch)=> {
            const res = await axios.post('http://localhost:3001/videogame/create', payload)
            return dispatch({
                type: 'CREATE_VIDEOGAME',
                payload: res.payload
            })
        }
    } catch (error) {
        console.log(error);
    }
}
/* 
export const createVideogames = (payload)=> {
    return (dispatch)=> {
        return axios.post('http://localhost:3001/videogame/create', payload)
        .then(res => dispatch({
            type: 'CREATE_VIDEOGAME',
            payload: res.data
        }))
    }
}
*/

export const order_Alphabetic = (payload) => {
    return {
        type: 'ORDER_ALPHABETIC',
        payload
    }
}

export const orderRating = (payload)=>{
    return {
        type: 'ORDER_RATING',
        payload
    }
}

export const filterGenre = (payload)=> {
    return {
        type: 'FILTER_GENRE',
        payload
    }
}

export const filterCreatedOrNot = (payload)=> {
    return {
        type: 'FILTER_CREATED_API',
        payload
    }
}

export const deleteVideogames = (id) => {
    return dispatch=> {
        return axios.delete(`http://localhost:3001/videogame/${id}`)
        .then(res => console.log(res.data))
        .catch(error=> console.log(error))
    }
}