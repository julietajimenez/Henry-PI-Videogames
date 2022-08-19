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

export const pagesControl = (number) => {
    return {
        type: 'CURRENT_PAGES',
        payload: number
    }
}

