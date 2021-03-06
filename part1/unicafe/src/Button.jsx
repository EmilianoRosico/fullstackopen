import React from 'react'

const btnStyle = {
  borderRadius: 10,
  background: 'gold',
  fontSize: 18,
}

const Button = ({handleClick,text}) => {
    return (
      <button style={btnStyle} onClick={handleClick}>
        {text}
      </button>
    )
  }

export default Button
