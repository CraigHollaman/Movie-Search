import React, { Component } from 'react';
import { Media} from 'react-bootstrap';

export default class MovieDetails extends Component {
  constructor(){ 
      super();  
      this.state = {
        loading: false,
        movieDetail: {}                                
  }
  this.handleClick = this.handleClick.bind(this)

}
  componentDidMount() {
    this.setState( {loading: true})
    const id = this.props.match.params.imdbID
    fetch("https://www.omdbapi.com/?i="+ id + "&apikey=1528751b&plot=full")
            .then(response => response.json())
             .then(data => {
                this.setState({
                    loading: false,
                    movieDetail: data
                })
            })
}

   handleClick(e) {
    this.props.history.push("/");  
   }
  render() { 
    const text = this.state.loading ? "loading" : this.state.movieDetail.Title

    return (
      <div>  

         <Media>
    <img
      width={64}
      height={64}
      className="mr-3"
      src={this.state.movieDetail.Poster}
      alt={this.state.movieDetail.Title}
    />
    <Media.Body>
      <h1>{text}</h1>
    <p>{this.state.movieDetail.Plot}</p>
        <ul>
          <li>Genre : {this.state.movieDetail.Genre}</li>
    <li> Director: {this.state.movieDetail.Director}</li>
    <li> Actors : {this.state.movieDetail.Actors}</li>
    <li> IMDB Score : {this.state.movieDetail.imdbRating}</li>   
          </ul> 
    </Media.Body>
  </Media>



        
        

      </div>
    );
  }
}