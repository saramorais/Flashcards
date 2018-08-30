import React, { Component } from 'react';
import '../style/cards.css';

import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.setState({ [e.target.name]: '' });
    this.props.addCard(this.state, this.props.cards.sets.id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    const { question, answer } = this.state;
    const isEnabled =
      question.length > 0 &&
      answer.length > 0;

    return (
      <div className='row'>
        <hr />
        <h4 className='form-toggle'>Add a new Card</h4>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit} className='form-group'>
            <div className='form-group'>
              <label>Question</label>
              <input name='question' type='text' onChange={this.handleChange} className="form-control" placeholder='Question' />
            </div>
            <div className='form-group'>
              <label>Answer</label>
              <textarea name='answer' type='text' onChange={this.handleChange} className="form-control" placeholder='Answer'></textarea>
            </div>
            <button type='submit' disabled={ !isEnabled } className='button-grey'>Add Card</button>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { cards: state };
}

export default connect(mapStateToProps, { addCard })(AddCard);
