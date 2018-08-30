import React, { Component } from 'react';
import _ from 'lodash';
import '../style/cards.css';
import { connect } from 'react-redux';
import { fetchCards, deleteCard } from '../actions';
import { Link } from 'react-router-dom';

import AddCard from './cards-add';

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    }
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id);
  }

  deleteCard(id) {
    const reFetchFunc = this.props.fetchCards;
    const setId = this.props.match.params.id;
    this.props.deleteCard(id, reFetchFunc, setId);
  }

  renderCards() {
    const selectedSet = this.props.set['cards'];

    if(selectedSet !== undefined) {
      if (selectedSet.length <= 0) {
        return <div className='list row'><h3 className='no-items'>This set does not have any cards. Please a card to the set.</h3></div>; 
      }
    }

    return _.map(selectedSet, card => {
      return (
        <div key={card.id} className='list row'>
          <div className='col-md-10'>
            <p className='question'>{card.question}</p>
            <p className='answer'>{card.answer}</p>
          </div>
          <div className='col-md-2 button-center'>
            <button onClick={(e) => this.deleteCard(card, e)} className='button-red'>Delete</button>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <p className='col-md-4'>{this.props.set.set_name}</p>
          <Link to={`/sets/${this.props.match.params.id}/game`} className='button button-right button-blue'>Game View</Link>
        </div>
        {this.renderCards()}
        <AddCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { set: state.sets };
}

export default connect(mapStateToProps, { fetchCards, deleteCard })(CardsList);
