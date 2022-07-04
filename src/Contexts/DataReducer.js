

export const mapsReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_PAGE":
        if(state.saved.includes(action.payload)) return state;
        return {...state,saved:[...state.saved,action.payload]};
        case "REMOVE_FROM_PAGE":
        return {...state,saved:state.saved.filter(c =>c !== action.payload)};
        case "ADD_TO_BOOKMARK":
        if(state.bookmarked.includes(action.payload)) return state;
        return {...state,saved:state.saved.filter(c =>c !== action.payload),bookmarked:[...state.bookmarked,action.payload]};
        default:
            return state;
    }
}