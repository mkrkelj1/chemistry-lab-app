import React from 'react'
import { CoursesAPI }  from '../api'
import { Link } from 'react-router-dom'


const Courses = () => (
  <div>
    <ul>
      {CoursesAPI.all().map(c => (
        <li key={c.id}>
          <Link to={`/courses/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Courses