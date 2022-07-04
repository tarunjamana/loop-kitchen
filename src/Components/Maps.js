import React from 'react';
import Map from './Map/Map';
function Maps({data, displayBtn}) {
  return (
    <div>
        {data && data.map((name) =>{
            return(
                <Map key={name} name={name} displayBtn={displayBtn} />
            )
        })}
    </div>
  )
}

export default Maps