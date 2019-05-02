import React, { FunctionComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Main: FunctionComponent = () => {
  return (
    <Navbar  bg="primary" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>Testing App</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/heroes">
          <Nav.Link>Heroes</Nav.Link>
        </LinkContainer>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};

export default Main;
