import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Display from './Display'
import Button from './Button'

const tdStyle = {
  color: 'blue',
  fontWeight: 'bold',
};

const Statistics = ({ good, neutral, bad, all }) => {
  let average = isNaN((good - bad) / all) ? 0 : (good - bad) / all
  let percentage = isNaN(good / all * 100) ? 0 : good / all * 100
  if (!good && !bad && !neutral) {
    return (
      <p>No Feedback given</p>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <td style={tdStyle}>Feedback</td>
          <td style={tdStyle}>Value</td>
        </tr>
      </thead>
      <tbody>
        <Display counter={good} text="Good" />
        <Display counter={neutral} text="Neutral" />
        <Display counter={bad} text="Bad" />
        <Display counter={all} text="Total answers" />
        <Display counter={average} text="Average" />
        <Display counter={percentage} text="Percentage" />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodComment = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const neutralComment = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const badComment = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)