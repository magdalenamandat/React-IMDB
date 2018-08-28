import React, { Component } from 'react';

class Movie extends Component {
  render(){
    return (
      <div className = "movie">
        <h3>{this.props.title}</h3>
        <a href={this.props.url} > Movie details </a>
      </div>
    )
  }
}

export default Movie;
