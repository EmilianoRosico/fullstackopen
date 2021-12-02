import React from 'react'

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

export default Course
