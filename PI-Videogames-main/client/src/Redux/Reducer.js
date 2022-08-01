const initialState = {
    videogames: [],
    detail: {},
    genre: [],
    videogamesForms: []
}

export default function reducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES': 
        return {
            ...state,
            videogames: action.payload
        }
        case 'GET_BY_NAME':
            return{
                ...state,
                videogames: action.payload
            }
        case 'GET_BY_ID':
            return {
                ...state,
                detail: action.payload
            }
        case 'REMOVE_DETAIL': 
            return {
                ...state,
                detail: {}
            }
        case 'GET_GENRE':
            return {
                ...state,
                genre: action.payload
            }
        case 'CREATE_VIDEOGAME':
            return{
                ...state,
                videogamesForms: state.videogamesForms.concat(action.payload)
            }
        default: return state
    }
    

}