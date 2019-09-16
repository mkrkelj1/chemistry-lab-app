import React from 'react'
import { ExperimentsAPI }  from '../api'
import { Link } from 'react-router-dom'

// Parse number/week/id from pathname.
const Experiment = (props) => {
  const _courseID = parseInt(props.match.params.id, 10)
  const _week = parseInt(props.match.params.week, 10)
  const experiment = ExperimentsAPI.get(_courseID, _week)
  
  if (!experiment) {
    return <div>Sorry, experiment not found.</div>
  }

  return (
    <div>
      <h1>Week {experiment.week}: {experiment.name} </h1>
      <h2>Chemicals: {experiment.chemicals}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Experiment