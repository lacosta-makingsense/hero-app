import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';

interface SearchProps {
  onChange: (search: string) => void;
}

export default class Search extends PureComponent<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <Form.Group>
        <Form.Control placeholder="Search..." type="text" onChange={this.handleChange} />
      </Form.Group>
    );
  }
}
