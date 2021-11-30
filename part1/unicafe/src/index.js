import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Display from './Display'
import Button from './Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodComment = () => setGood(good + 1)
  const neutralComment = () => setNeutral(neutral + 1)
  const badComment = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button
        handleClick={goodComment}
        text='Good'
      />
      <Button
        handleClick={neutralComment}
        text='Neutral'
      />     
      <Button
        handleClick={badComment}
        text='Bad'
      />
      <h2>Statistic</h2>
      <Display counter={good} text="Good"/>
      <Display counter={neutral} text="Neutral" />
      <Display counter={bad} text="Bad" /> 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)