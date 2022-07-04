import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import UseFetch from '../Hooks/UseFetch';
import AutoComplete from '../Components/AutoComplete/AutoComplete';
import {SavedState} from '../Contexts/DataContext';
import Maps from '../Components/Maps';

function Home() {


    const {state} = SavedState();
    const {data,loading} =state.restaruantData();
  
    return (
        <div className='d-flex w-100 flex-row'>
            <SideBar  />
            <div className='p-2' style={{minWidth:"800px"}}>
             {!loading?<AutoComplete data={data} />:'loading'}
            <Maps data={state.saved} displayBtn={true}/>
            </div>
        </div>
    )
}

export default Home
