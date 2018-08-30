import React, { Component } from 'react';
import '../style/sets.css';

import { connect } from 'react-redux';
import { addSet } from '../actions';

class AddSet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.setState({ name: '' });
    this.props.addSet(this.state.name);
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state;
    const isEnabled =name.length > 0;

    return (
      <div className='add-set'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label><h4>Create a New Set</h4></label>
            <input name='name' type='text' className='form-control' onChange={this.handleChange} placeholder='Set Name' />
          </div>
          <button type='submit' disabled={ !isEnabled } className='button-grey'>Create Set</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null, { addSet })(AddSet);
