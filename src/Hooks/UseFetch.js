import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UseFetch(url,params={
    'maxRecords': '3',
    'view': 'Grid view'
}) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() =>{
        setLoading(true);
        setData(null);
        setError(null);
        axios.get(url, {
            params,
            headers: {
                'Authorization': 'Bearer keyfXgn8PL6pB3x32'
            }
        }).then(res => {
            setLoading(false);
            setData(res.data.records);
        }).catch(err => {
            setLoading(false)
            setError(err);
        })
    },[])

    return { data , loading ,error}
}

export default UseFetch
