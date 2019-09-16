import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoursesList from './CoursesList'
import ExperimentsList from './ExperimentsList'
import Course from './Course'
import Experiment from './Experiment'

// Route matching
// if /courses --> return all
// if /courses/:id --> return course, etc.

const CourseRoutes = () => (
  <Switch>
    <Route exact path='/courses' component={CoursesList}/>
    <Route exact path='/courses/:id' component={Course}/>
    <Route exact path='/courses/:id/experiments' component={ExperimentsList}/>
    <Route exact path='/courses/:id/experiments/:week' component={Experiment}/>
  </Switch>
)


export default CourseRoutes