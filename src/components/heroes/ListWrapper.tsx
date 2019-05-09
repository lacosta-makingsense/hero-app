import React, { PureComponent } from 'react';
import jwPaginate from 'jw-paginate';
import Container from 'react-bootstrap/Container';

import List from './List';
import Paginator from '../common/Paginator';
import Search from '../common/Search';
import { ListWrapperContainerProps } from '../../containers/ListWrapper';

interface ListWrapperState {
  page: number;
  search: string;
}

export default class ListWrapper extends PureComponent<ListWrapperContainerProps, ListWrapperState> {
  constructor(props: ListWrapperContainerProps) {
    super(props);
    this.state = { page: 1, search: '' };
    this.setPage = this.setPage.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  componentDidMount() {
    this.props.getHeroesRequest();
  }

  componentDidUpdate(_: any, prevState: ListWrapperState) {
    if (prevState.page !== this.state.page || prevState.search !== this.state.search) {
      this.props.getHeroesRequest({ page: this.state.page });
    }
  }

  setPage(page: number): void {
    this.setState({ ...this.state, page });
  }

  setSearch(search: string): void {
    this.setState({ ...this.state, search });
  }

  render() {
    const paginatorParams = {
      ...jwPaginate(this.props.response.total, this.props.response.current, this.props.response.perPage, 7),
      onPageChange: this.setPage
    };

    return (
      <Container>
        <Search onChange={this.setSearch}></Search>
        <List {...this.props}></List>
        <Paginator {...paginatorParams}></Paginator>
      </Container>
    );
  }
}
