export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQCALI1Z2dMBaR_QFnUjBvaTvUncqiMIaPZY-4Sd5IPTwBqZvr…N5ScFOlYoiM8-MF0VpxlKAXW6CsCcMjaK1LZw8QCk43rR2vlF"
}

//from dispatch fn, we set action data here.
const reducer = (state, action) => {
    
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer;