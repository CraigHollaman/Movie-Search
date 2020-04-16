import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Movie from './Movie'
import MovieDetails from './MovieDetails'


 export default class Header extends Component {
  render(){
    return (      
        <BrowserRouter>
          <div>                               
            <Switch> 
            <Route path="/MovieDetails/:imdbID/:Title" component={MovieDetails} />
            <Route path="/Movie" component={Movie} />                        
            </Switch>   
          </div>  
          
        </BrowserRouter>              
    )
  }
}