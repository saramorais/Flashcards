import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-md-6'>
                <Link to='/'><h1 className='col-md-6'>Flashcards</h1></Link>
              </div>
              <div className='col-md-6'>
                <Link to='/' className='button button-blue header-button'>View All Sets</Link>
              </div>
            </div> 
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
