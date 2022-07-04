import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import Maps from '../Components/Maps';
import {SavedState} from '../Contexts/DataContext';


function Bookmark() {
    const {state:{bookmarked}} = SavedState();

    return (
        <div className='d-flex w-100 flex-row'>
        <SideBar  />
        <div className='p-2' style={{minWidth:"800px"}}>
            <Maps data={bookmarked} displayBtn={false}/>
            </div>
    </div>
    )
}

export default Bookmark
