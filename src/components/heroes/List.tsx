import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import './List.css';
import ListItem from './ListItem';
import { HeroListState } from '../../types/hero';

type ListProps = HeroListState;

export default class List extends PureComponent<ListProps> {
  render() {
    if (this.props.loading) {
      return <Spinner animation="border"></Spinner>;
    }

    if (this.props.error) {
      return <Alert variant="danger">Error!</Alert>;
    }

    const heroes = this.props.response.heroes.map(hero => (
      <ListItem key={hero.id} hero={hero}></ListItem>
    ));

    return (
      <ListGroup className="list overflow-auto">
        {heroes}
      </ListGroup>
    );
  }
}
