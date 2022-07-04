import React ,{useState,useEffect}from 'react'

function useLocalStorage(defaultvalue,key) {
    const [value,setValue] = useState(()=>{
    const inLocalStorage = localStorage.getItem(key);
   return inLocalStorage !== null?JSON.parse(inLocalStorage):defaultvalue
    })

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value]);

  return [value,setValue]
}

export default useLocalStorage