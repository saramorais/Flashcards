import React, { Component } from 'react';
import _ from 'lodash';
import '../style/sets.css';
import { connect } from 'react-redux';
import { fetchSets, deleteSet } from '../actions';
import { Link } from 'react-router-dom';

import AddSet from './sets-add';

class SetList extends Component {
  constructor(props) {
    super(props);
    this.deleteSet = this.deleteSet.bind(this);
  }

  componentDidMount() {
    this.props.fetchSets();
  }

  deleteSet(id) {
    const reFetchSets = this.props.fetchSets;
    this.props.deleteSet(id, reFetchSets);
  }

  renderCards() {
    const { sets } = this.props;
    
    if (sets !== undefined) {
      if(sets.length <= 0) {
        return <div className='list row'><h3 className='no-items'>This set does not have any cards. Please a card to the set.</h3></div>;
      } 

      return _.map(sets, set => {
        return (
          <div key={set.id} className='list row'>
            <Link to={`/sets/${set.id}`} className='col-md-10'>
              <p className='set-name'>{set.set_name}</p>
            </Link>
            <div className='col-md-2'>
              <button onClick={(e) => this.deleteSet(set.id, e)} className='button-red'>Delete</button>
            </div>
          </div>
        )
      });
    }


  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <AddSet />
          </div>
          <div className='col-md-8'>
            <h4>Flashcards Sets</h4>
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sets: state.sets };
}

export default connect(mapStateToProps, { fetchSets, deleteSet })(SetList);
