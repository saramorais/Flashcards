import React from 'react';
import ReactDOM from 'react-dom';
import CardsList from '../components/cards-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
