import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CardsList from './components/cards-list';
import CardsGame from './components/cards-game-mode';
import AddSet from './components/sets-add';
import SetsList from './components/sets-list';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './header';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Switch>
          {/* <-------  FLASHCARDS  -------> */}
          <Route path='/add' component={AddSet} />
          <Route path='/sets/:id/game' component={CardsGame} />
          <Route path='/sets/:id' component={CardsList} />
          <Route path='/' component={SetsList} />
          {/* <-------  FLASHCARDS  -------> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));

registerServiceWorker();
