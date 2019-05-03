import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import './List.css';
import { ListProps } from '../../containers/List';
import ListItem from './ListItem';

export default class List extends PureComponent<ListProps> {
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    if (this.props.loading) {
      return <Spinner animation="border"></Spinner>;
    }

    if (this.props.error) {
      return <Alert variant="danger">Error!</Alert>;
    }

    const heroes = this.props.heroes.map(hero => (
      <ListItem key={hero.id} hero={hero}></ListItem>
    ));

    return (
      <div className="list overflow-auto">
        <ListGroup>
          {heroes}
        </ListGroup>
      </div>
    );
  }
}
