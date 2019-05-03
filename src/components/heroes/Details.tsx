import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import { RouteComponentProps } from 'react-router-dom';

import { DetailsProps } from '../../containers/Details';
import { MarvelService } from '../../services/marvel';

interface DetailsMatchParams {
  id: string;
}

export default class Details extends PureComponent<DetailsProps & RouteComponentProps<DetailsMatchParams>> {
  componentDidMount() {
    this.loadDetails();
  }

  componentDidUpdate(prevProps: DetailsProps & RouteComponentProps<DetailsMatchParams>) {
    const heroId = this.props.match.params.id;

    if (prevProps.match.params.id !== heroId) {
      this.loadDetails();
    }
  }

  private loadDetails() {
    const heroId = this.props.match.params.id;
    this.props.getHero(heroId);
  }

  render() {
    if (this.props.loading) {
      return <Spinner animation="border"></Spinner>;
    }

    if (this.props.error) {
      return <Alert variant="danger">Error!</Alert>;
    }

    if (! this.props.hero) {
      return null;
    }

    const imageUrl = MarvelService.imageUrl(this.props.hero, 'large');

    return (
      <>
        <h1>{this.props.hero.name}</h1>
        <p>
          {this.props.hero.description || 'No description'}
        </p>
        <p>
          <Image src={imageUrl} rounded />
        </p>
      </>
    );
  }
}
