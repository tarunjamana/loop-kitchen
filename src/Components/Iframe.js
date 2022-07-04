import React from 'react'

function Iframe({params}) {
  return (
    <>
    <p>{params}</p>
    <iframe width="600" height="450" src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":${JSON.stringify(params)}}`} frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
    </>
  )
}

export default Iframe