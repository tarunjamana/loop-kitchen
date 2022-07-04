import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './autocomplete.scss';
import {SavedState} from '../../Contexts/DataContext';


function AutoComplete({data}) {
    const [suggestions,setSuggestions] = useState([]);
    const [suggestionIndex,setSuggestionIndex] = useState(0);
    const  [suggestionsActive,setSuggestionsActive] = useState(false);
    const [value,setValue] = useState("");
    const {state:{saved},dispatch} = SavedState();
    const handleChange = (e) =>{
      const query = e.target.value.toLowerCase();
      setValue(query);
      if(query.length > 1){
        const filterSuggestions = data.filter((data) =>{
          return  data.fields.Name.toLowerCase().indexOf(query) > -1
        });
        setSuggestions(filterSuggestions);
        setSuggestionsActive(true)
      } else {
        setSuggestionsActive(false)
      }
    }

    const handleClick = (e) =>{
        setSuggestions([]);
        setValue(e.target.innerText)
        setSuggestions(false);
    }
    
    const handleAdd = () =>{
      const isPresentinData = data.some(el => el.fields.Name === value)
       if(!isPresentinData) return
      dispatch({
        type:'ADD_TO_PAGE',
        payload:value
      })
    }
 
    const handleKeyDown = (e) =>{
    //  UP Arrow
     if(e.keyCode === 38){ 
        if(suggestionIndex === 0){
            return;
        }
        setSuggestionIndex(suggestionIndex - 1);
     } 
    //   Down Arrow
     else if(e.keyCode === 40){
        if(suggestionIndex - 1 === suggestions.length){
            return;
        }
        setSuggestionIndex(suggestionIndex + 1);
     } 
    //  Enter Key
    else if(e.keyCode === 13){
        setValue(suggestions[suggestionIndex]);
        setSuggestionIndex(0);
        setSuggestionsActive(false);
    }
    }


    const Suggestions = () =>{
        return (
            <ul className='suggestions'>
              {suggestions && suggestions.map((s,index) =>{
                return (
                    <li 
                    className={index === suggestionIndex ? "suggestions__active":""}
                    key={index}
                    onClick={handleClick}
                    >
                        {s.fields.Name}
                    </li>
                )
              })}
            </ul>
        )
    }


  return (
    <>
        <div className='d-flex flex-row align-items-center mt-4 '>
    <div className='autocomplete'>
      <input 
       type="text"
       value={value}
       onChange={handleChange}
       onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
    </div>
    <Button variant="success" className='add-btn' onClick={handleAdd}>ADD</Button>
    </div>
    </>
  )
}

export default AutoComplete