import React, { Component } from 'react';
import { Media, Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

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
               
        <div key={movie.imdbID} class="movie-container">
            <Media className="media-inner">
            <a href={`/MovieDetails/${movie.imdbID}/${movie.Title}`}>
                <img width={64} src={movie.Poster} alt={movie.Title} /></a>
                <Media.Body className="media-inner">
                <a href={`/MovieDetails/${movie.imdbID}/${movie.Title}`}>{movie.Title}</a><br />    
                <span>{movie.Year}</span>
                </Media.Body>
            </Media>
        </div>

       )
            return (
       <div>                  
    <div class="search-container">  
        <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">  
            <InputGroup>
                <FormControl type="text"  value={this.state.searchTerm}  placeholder="Enter a movie"  onChange={this.handleChange} autoComplete="false" />
            <InputGroup.Append>
            <Button type="submit" variant="primary">Search</Button>
            </InputGroup.Append>
            </InputGroup>
        </FormGroup>                            
        </Form>      
    </div>
    <div>
   
{listMovies}</div>
              </div>      
            )
    }
}






