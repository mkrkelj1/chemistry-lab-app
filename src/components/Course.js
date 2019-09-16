import React from 'react'
import { CoursesAPI }  from '../api'
import { Link } from 'react-router-dom'


const Course = (props) => {
  // Parse number/week/id from pathname.
  const course = CoursesAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!course) {
    return <div>Sorry, course not found.</div>
  }
  const id_ = course.id
  return (
    <div>
      <h1>{course.name} </h1>
      <h2>Instructor: {course.instructor}</h2>
      <Link to={`${id_}/experiments`}>Experiments</Link>
      <br/>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Course


































