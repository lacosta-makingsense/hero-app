import React, { FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import NavBar from './NavBar'
import Heroes from './heroes/Heroes';

const Main: FunctionComponent = () => {
  return (
    <Container>
      <NavBar />
      <Route path="/" exact render={props => (
        <Alert variant="info">
          Select one option from menu
        </Alert>
      )}/>
      <Route path="/heroes" component={Heroes}></Route>
    </Container>
  );
};

export default Main;
