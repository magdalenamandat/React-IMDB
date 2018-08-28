import React, { Component } from 'react';
import Movie from './Movie.js'

class MovieList extends Component {
  render(){

    const movieComponents = this.props.data.map((movie) => {
    return(
      <Movie title={movie.title} url={movie.url} key={movie.id} ></Movie>
    );
  });

    return (
      <ul className="movie-list">
      {movieComponents}
    </ul>
    );
  }
}

export default MovieList;
