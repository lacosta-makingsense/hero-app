import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { LinkContainer } from 'react-router-bootstrap';

import './List.css';
import { ListProps } from '../../containers/List';
import { MarvelService } from '../../services/marvel';

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

    const heroes = this.props.heroes.map(hero => {
      const imageUrl = MarvelService.imageUrl(hero, 'small');

      return (
        <LinkContainer key={hero.id} to={`/heroes/${hero.id}`}>
          <ListGroup.Item action>
            <p>
              <Image src={imageUrl} rounded />
              {hero.name}
            </p>
          </ListGroup.Item>
        </LinkContainer>
      );
    });

    return (
      <div>
        <ListGroup>
          {heroes}
        </ListGroup>
      </div>
    );
  }
}
