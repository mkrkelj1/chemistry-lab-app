import React from 'react'
import { Link } from 'react-router-dom'

// Exports to Header.js

const NavigationBar = () => (
  <header>
    <nav>
     <Link to='/'>Home</Link>
     <br/>
     <Link to='/courses'>Courses</Link>
    </nav>
  </header>
)

export default NavigationBar