import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Routes from './Routes'


import Videos from './videos/Videos'


// Declare the entrypoint routes.
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Route exact path='/videos' component = { Videos }/>
      <Route path='/courses' component = { Routes }/>
    </Switch>
  </main>
)

export default Main
