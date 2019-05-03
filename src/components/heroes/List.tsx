import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import jwPaginate from 'jw-paginate';

import './List.css';
import { ListProps } from '../../containers/List';
import ListItem from './ListItem';
import Paginator from '../common/Paginator';

export default class List extends PureComponent<ListProps> {
  constructor(props: ListProps) {
    super(props);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  setPage(page: number): void {
    this.props.getHeroes({ page });
  }

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

    const paginatorParams = {
      ...jwPaginate(this.props.response.total, this.props.response.current, this.props.response.perPage, 7),
      onPageChange: this.setPage
    };

    return (
      <div>
        <ListGroup className="list overflow-auto">
          {heroes}
        </ListGroup>
        <Paginator {...paginatorParams}></Paginator>
      </div>
    );
  }
}
