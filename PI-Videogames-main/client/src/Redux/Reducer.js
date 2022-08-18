const initialState = {
    videogames: [],
    filtered: [],
    detail: {},
    genre: [],
    pages: 1
}

export default function reducer(state= initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES': 
        return {
            ...state,
            videogames: action.payload,
            filtered : action.payload
        }
        case 'GET_BY_NAME':
            return{
                ...state,
                videogames: action.payload,
                pages: 1
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
                filtered: state.filtered.concat(action.payload)
            }
        case 'ORDER_ALPHABETIC':
            const todos = state.filtered
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
                filtered: action.payload === 'all' ? state.videogames : order
            }
        case 'ORDER_RATING':
            const todosVG = state.filtered
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
                filtered: action.payload === 'all' ? state.videogames : orderR
            }
        case 'FILTER_GENRE': 
             const allVG = state.filtered
             const filterApi = allVG.filter(el => el.genres?.toString().includes(action.payload))
             console.log(filterApi);
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
                filtered: action.payload === 'all' ? state.videogames : concatFilter
            }
        case 'FILTER_CREATED_API':
            const allVGames = state.filtered
            const filter = action.payload === 'created' ? allVGames.filter(el => el.created) : allVGames.filter(el=> !el.created)
            return {
                ...state,
                filtered: action.payload === 'all' ? state.videogames : filter
            }
        case 'CURRENT_PAGES':
            return {
                ...state,
                pages: action.payload
            }
            default: return state
        }
}


