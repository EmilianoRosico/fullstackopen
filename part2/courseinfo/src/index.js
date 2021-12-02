import React from 'react';
import ReactDOM from 'react-dom';


const Total = ({ course }) => {
  const sum = course.parts.reduce((sum, b) => sum + b.exercises, 0);
  return (
    <p><strong>Total of exercises {sum}</strong></p>
  )
}


const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
}

const Course = ({ courses }) => {

  return (
    <>
      <h1>Web development curriculum</h1>
      <br></br>
      {courses.map(course =>
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Content course={course} />
          <Total course={course} />
          <hr></hr>
        </div>
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return <Course courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))