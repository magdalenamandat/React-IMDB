import React, { Component } from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      data:[
        { id: 1, title: "Life of a Party", url: "https://www.imdb.com/title/tt5619332/?ref_=rlm"},
        { id: 2, title: "Entebbe", url: "https://www.imdb.com/title/tt5466186/?ref_=rlm"},
        { id: 3, title: "Dead Pool 2", url: "https://www.imdb.com/title/tt5463162/?ref_=rlm"},
        { id: 4, title: "Submergence", url: "https://www.imdb.com/title/tt3563262/?ref_=rlm"},

      ]
    };
  }
  render(){
    return (
      <div className = "movie-box">
          <h1>UK OPENING THIS WEEK</h1>
          <MovieList data={this.state.data}/>
      </div>
    )
  }
}

export default MovieBox
