import React from 'react';
import Iframe from '../Iframe';
import {Button} from 'react-bootstrap';
import './map.scss';
import {SavedState} from '../../Contexts/DataContext';

function Map({name,displayBtn}) {

  const {dispatch} = SavedState();

  return (
    <div className='mb-5'>
        {name &&  <Iframe params={name} />}
        {displayBtn &&  
                <div className='btn-section'>
                <Button variant="success" className='add-btn' onClick={() =>{
                  dispatch({
                    type:"ADD_TO_BOOKMARK",
                    payload:name
                  })
                }}>Bookmark</Button>
                <Button variant="danger" className='add-btn' onClick={() =>{
                  dispatch({
                    type:"REMOVE_FROM_PAGE",
                    payload:name
                  })
                }}>Remove</Button>
                </div> 
        }
    </div>
  )
}

export default Map