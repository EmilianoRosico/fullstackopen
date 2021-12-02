import React from 'react';
import ReactDOM from 'react-dom';


const Total = ({ course }) => {
  const sum = course.parts.reduce((sum,b) => sum + b.exercises,0);
  return(
    <p>Total of exercises {sum}</p>
  ) 
}


const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
}

const Course = ({course}) => {

  return (
    <>
    <h1>{course.name}</h1>
    <Content course={course} />
    <hr></hr>
    <Total course={course} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))