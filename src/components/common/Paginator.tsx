import React, { PureComponent } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import jwPaginate from 'jw-paginate';

interface PaginatorProps {
  onPageChange: (page: number) => void;
}

type PaginateProps = ReturnType<typeof jwPaginate>;

export default class Paginator extends PureComponent<PaginatorProps & PaginateProps> {
  constructor(props: PaginatorProps & PaginateProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page: number): void {
    this.props.onPageChange(page);
  }

  render() {
    const pages = this.props.pages.map(page => (
      <Pagination.Item onClick={() => this.handleClick(page)} key={page} active={this.props.currentPage === page}>
        {page}
      </Pagination.Item>
    ));
  
    return (
      <Pagination size="sm">
        { this.props.currentPage !== 1 && <Pagination.First onClick={() => this.handleClick(1)} /> }
        { this.props.currentPage > 1 && <Pagination.Prev onClick={() => this.handleClick(this.props.currentPage - 1)} /> }
        {pages}
        { this.props.currentPage < this.props.totalPages && <Pagination.Next onClick={() => this.handleClick(this.props.currentPage + 1)} /> }
        { this.props.currentPage !== this.props.totalPages && <Pagination.Last onClick={() => this.handleClick(this.props.totalPages)} /> }
      </Pagination>
    );
  }
}
