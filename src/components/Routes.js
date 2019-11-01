import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Courses from './course/Courses'
import Course from './course/Course'
import Experiments from './experiment/Experiments'
import Experiment from './experiment/Experiment'


// Route matching
// if /courses --> return all
// if /courses/:id --> return course, etc.
const Routes = () => (
  <Switch>
    <Route exact path='/courses' component={ Courses }/>
    <Route exact path='/courses/:id' component={ Course }/>
    <Route exact path='/courses/:id/experiments' component={ Experiments }/>
    <Route exact path='/courses/:id/experiments/:experimentID' component={ Experiment }/>
  </Switch>
)

export default Routes