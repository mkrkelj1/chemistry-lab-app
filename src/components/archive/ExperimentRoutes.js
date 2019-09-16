import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ExperimentsList from './ExperimentsList'
import Experiment from './Experiment'

// Routing matching
// if /experiments --> return all
// if /experiments/:number --> return experiment



const ExperimentRoutes = () => (
  <Switch>
    <Route exact path='/experiments' component={ExperimentsList}/>
    <Route path='/experiments/:number' component={Experiment}/>
  </Switch>
)


export default ExperimentRoutes