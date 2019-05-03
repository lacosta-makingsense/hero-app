import React, { FunctionComponent } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ListItem.css';
import { MarvelService } from '../../services/marvel';
import { Hero } from '../../types/hero';

interface ListItemProps {
  hero: Hero;
}

const ListItem: FunctionComponent<ListItemProps> = ({ hero }) => {
  const imageUrl = MarvelService.imageUrl(hero, 'small');

  return (
    <LinkContainer to={`/heroes/${hero.id}`}>
      <ListGroup.Item action>
        <>
          <Container>
            <Row>
              <Col sm={4}>
                <Image src={imageUrl} rounded />
              </Col>
              <Col sm={8}>
                <p>
                  {hero.name}<br/>
                  <small>
                    {hero.comics.available > 0 && <span className="text-primary">CO</span>}
                    {hero.events.available > 0 && <span className="text-success">EV</span>}
                    {hero.stories.available > 0 && <span className="text-danger">ST</span>}
                    {hero.series.available > 0 && <span className="text-warning">SE</span>}
                  </small>
                </p>
              </Col>
            </Row>
          </Container>
        </>
      </ListGroup.Item>
    </LinkContainer>
  );
}

export default ListItem;
