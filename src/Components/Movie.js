import React, { Component } from 'react';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class Movie extends Component {    
    constructor(){
        super();  
        this.state = {
            Movies: [],
            searchTerm:''           
        };     
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);                               
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });        
    }
    handleSubmit(e) {
        e.preventDefault();    
        this.setState({        
        })      
        fetch("https://www.omdbapi.com/?s="+ this.state.searchTerm + "&apikey=1528751b")
        .then(response => response.json())
         .then(data => {
            this.setState({ Movies: data.Search });           
        })      
    }      

    render() {  
       const listMovies = this.state.Movies.map((movie) =>  
               
        <ul className="list-unstyled" key={movie.imdbID}>
  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={movie.Poster}
      alt={movie.Title}
    />
    <Media.Body>
    <a href={`/MovieDetails/${movie.imdbID}/${movie.Title}`}><h5>{movie.Title}</h5></a>
    <p>
        {movie.Year}
        
      </p>
    </Media.Body>
  </Media>
  </ul>

       )
            return (
                <div>           
                    <Form inline onSubmit={this.handleSubmit}>
                        <div>
                    <FormGroup controlId="formInlineName">                                    
                          <FormControl 
                              type="text" 
                              value={this.state.searchTerm} 
                              placeholder="Enter Search Term" 
                              onChange={this.handleChange}
                          />
                      </FormGroup> 
                      </div>                           
                      {' '}
                      <div>
                      <Button type="submit">
                          Search
                      </Button>
                      </div>
                  </Form>
                    {listMovies}
                     </div>
            )
    }
}




