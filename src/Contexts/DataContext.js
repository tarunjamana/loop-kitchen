import React,{createContext,useContext,useReducer,useEffect} from 'react';
import UseFetch from '../Hooks/UseFetch';
import { mapsReducer } from './DataReducer';

const DataStore = createContext();

const  Context = ({children}) =>{
    const {data ,loading,error } =  UseFetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants',{
        'maxRecords': '15',
        'view': 'Grid view'
    });
    


    const [state,dispatch] = useReducer(mapsReducer,{
        restaruantData:function(){
            const {data ,loading,error } =  UseFetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants',{
                'maxRecords': '15',
                'view': 'Grid view'
            });
            return{data,loading,error}
        },
        saved:JSON.parse(localStorage.getItem("savedMaps"))|| [],
        bookmarked:JSON.parse(localStorage.getItem("bookmarkedMaps"))|| []
    })

    useEffect(() =>{
        localStorage.setItem("savedMaps",JSON.stringify(state.saved))
        localStorage.setItem("bookmarkedMaps",JSON.stringify(state.bookmarked))
    },[state.saved,state.bookmarked])
    console.log(state.saved ,"saved state");
    console.log(state.bookmarked,"bookmarked state");

    return (
        <DataStore.Provider value={{state,dispatch}}>
            {!loading && children}
        </DataStore.Provider>
    )
}  

export default Context

export const SavedState = () => {
    return useContext(DataStore);
}