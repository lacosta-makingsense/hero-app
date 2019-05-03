import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { Route, RouteComponentProps } from 'react-router-dom';

import List from '../../containers/List';
import Details from '../../containers/Details';

const Heroes: FC<RouteComponentProps> = ({ match }) => {
  return (
    <Container>
      <Row>
        <Col sm={4}><List /></Col>
        <Col sm={8}>
          <Route path={`${match.path}/:id`} component={Details} />
          <Route
            exact
            path={match.path}
            render={() => <Alert variant="info">Please select a hero.</Alert>}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Heroes;
