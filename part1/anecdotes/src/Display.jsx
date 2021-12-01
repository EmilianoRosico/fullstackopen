import React from 'react'

const Display = ({anectdote,title}) => {
    return (
    <>
    <h1>{title}</h1>
    <div>
      {anectdote}
    </div>
    <br></br>
    </>
    )
  }

export default Display
