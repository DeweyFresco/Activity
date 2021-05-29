import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route }  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Login Form </Navbar.Brand>
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Button className="nav-btn" variant="outline-primary">Home</Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button className="nav-btn" variant="outline-primary">Login</Button>
            </LinkContainer>
          </Nav>
        </Navbar>

        {/* Body */}
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
