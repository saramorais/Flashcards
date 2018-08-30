import React, { Component } from 'react';
import '../style/cards.css';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import { Link } from 'react-router-dom';

class CardsGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentView: 'question'
    }
    this.nextCard = this.nextCard.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id);
  }

  renderCard() {
    const index = this.state.currentIndex;
    const view = this.state.currentView;
    const { cards } = this.props.cards;

    if (cards !== undefined) {

      if(cards.length <= 0) {
        return <div className='list row'><h3 className='no-items'>This set does not have any cards. Please go to List View to add a card to the set.</h3></div>;
      }
      if (view === 'question') {
        return <div className='game'><h1>{cards[index].question}</h1></div>;
      } else {
        return <div className='game'><h1>{cards[index].answer}</h1></div>;
      }

    }
  }


  nextCard() {
    var newIndex = 0;
    if (this.state.currentIndex < this.props.cards.cards.length - 1) {
       newIndex = this.state.currentIndex + 1;
    } else {
       newIndex = 0;
    }
    this.setState({
      currentIndex: newIndex,
      currentView: 'question'
    });
    this.renderCard();
  }

  showQuestion() {
    this.setState({currentView: 'question'});
  }

  showAnswer() {
    this.setState({currentView: 'answer'});
  }

  renderButtons() {
    const view = this.state.currentView;
    if(view === 'question') {
      return <div onClick={() => this.showAnswer(this.props.state)} className='button-center'><button className='button-blue'>Show Answer</button></div>
    } else {
      return <div onClick={() => this.showQuestion(this.props.state)} className='button-center'><button className='button-blue'>Show Question</button></div>
    }
  }

  render() {
    // console.log(this.props.cards);

    return (
      <div className='container'>
        <div className='row'>

          <div className='row'>
            <div className='col-md-6'>
              <p className='set-name'>{this.props.cards.set_name}</p>
            </div>
            <div className='col-md-6'>
              <Link to={`/sets/${this.props.match.params.id}`} className='button button-right button-blue'>List View</Link>
            </div>
            <div className='col-md-12'>
              {this.renderCard()}
            </div>
            <div className='col-md-6'>
              {this.renderButtons()}
            </div>
            <div className='col-md-6'>
              <div onClick={this.nextCard} className='button-center'><button className='button-blue'>Next Question</button></div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return { cards: state.sets };
}

export default connect(mapStateToProps, { fetchCards })(CardsGame);

