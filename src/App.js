import React, { Component } from 'react';
import Movie from './Components/Movie'
import Header from './Components/Header'

export default class App extends Component {    
  render() {        
    return (
      <div>
        <Header />
        <Movie />
      </div>
    );
  }
}