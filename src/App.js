import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <Container className="p-3">
    <Header />
    <Main />    
  </Container>
)

export default App