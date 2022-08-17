const initialState = {
    videogames: [],
    allVideogames: [],
    detail: {},
    genre: [],
    videogamesForms: []
}

export default function reducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES': 
        return {
            ...state,
            videogames: action.payload,
            allVideogames : action.payload
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
                videogames: state.videogames.concat(action.payload),
                allVideogames: state.allVideogames.concat(action.payload)
            }
        case 'ORDER_ALPHABETIC':
            const todos = [...state.allVideogames]
            const order = action.payload ===  'asc' ? todos.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                } 
                if (b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1 
                } 
                return 0
            }) : todos.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1 
                }
                if(b.name.toLowerCase() > a.name.toLowerCase() ){
                    return 1 
                } return 0
            })
            return {
                ...state, 
                videogames: action.payload === 'all' ? state.videogames : order
            }
        case 'ORDER_RATING':
            const todosVG = [...state.allVideogames]
            const orderR = action.payload === 'asc' ? todosVG.sort(function(a, b){
                if(a.rating > b.rating){
                    return 1
                }
                if(b.rating > a.rating){
                    return -1
                } return 0
            }) : todosVG.sort(function(a, b){
                if(a.rating > b.rating){
                    return -1
                }
                if(b.rating > a.rating){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                videogames: action.payload === 'all' ? state.videogames : orderR
            }
        case 'FILTER_GENRE': 
             const allVG = state.allVideogames 
            const filterApi = allVG.filter(el => el.genres?.toString().includes(action.payload))
            const filterDB =  allVG.filter(el=> {
                for(var i = 0; i < el.generos?.length; i++){
                    if(el.generos[i]?.name.includes(action.payload)){
                        return true}
                }
            return false 
            })       
            const concatFilter = filterApi.concat(filterDB)
            return {
                ...state,
                videogames: action.payload === 'all' ? state.allVideogames : concatFilter
            }
        case 'FILTER_CREATED_API':
            const allVGames = state.allVideogames
            const filter = action.payload === 'created' ? allVGames.filter(el => el.created) : allVGames.filter(el=> !el.created)
            return {
                ...state,
                videogames: action.payload === 'all' ? state.allVideogames : filter
            }
            default: return state
        }
    

}
/* let orderA= action.payload === 'asc' ? state.allDogs.sort(function(a, b){
                if(a.name > b.name){
                    return 1
                } 
                if(b.name > a.name){
                    return -1
                } 
                return 0
            }) : state.allDogs.sort(function(a,b){
                if(a.name > b.name){
                    return -1
                }
                if(b.name > a.name){
                    return 1 
                } 
                return 0
            }) 
            
            
            (state.videogames.map(el => el.name)).sort() : (state.videogames.map(el => el.name)).sort().reverse()*/

