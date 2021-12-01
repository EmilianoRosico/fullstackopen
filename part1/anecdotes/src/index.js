import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import Display from './Display'

const App = ({anecdotes}) => {
  //useState declaration
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0])

  //Handle function
  const ramdomAnecdotes = () => {setSelected(Math.floor(Math.random() * 6))}
  const handleVotes = () => {
  
  //Variable used to read the array counter
  let a = [...vote]
  //increse in 1 the voted story 
  a[selected]+=1
  setVote(a)
  }
  
  //Take the index of the first max value in array
  let mostVoted = vote.indexOf(Math.max(...vote));
  

  
  return (
    <>
    <Display title={"Anecdote of the day"} anectdote={anecdotes[selected]} />
    <Button text={"Vote"} handleClick={handleVotes} />
    <Button text={"Next anecdotes"} handleClick={ramdomAnecdotes} />
    <p>{`The history ${selected} has ${vote[selected]} votes.`}</p>
    <hr></hr>
    <Display title={"Anecdote with most votes"} anectdote={anecdotes[mostVoted]} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)