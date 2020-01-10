import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './callout.css'

const App = () => (
  <Container >
    <Header />
    <Main />    
  </Container>
)

export default App