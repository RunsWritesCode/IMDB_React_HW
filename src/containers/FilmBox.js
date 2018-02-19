import React, { Component } from 'react';
import FilmList from '../components/FilmList';
import ShowtimesButton from '../components/ShowtimesButton';


class FilmBox extends Component {

  constructor() {
    super();
    this.state = {

      films: [
        {id: 1, name: "Star Wars", showtimes: "showtimes"},
        {id: 2, name: "Ice Cold in Alex", showtimes: "showtimes"},
        {id: 3, name: "School for Scandals", showtimes: "showtimes"},
        {id: 4, name: "Toy Story", showtimes: "showtimes"}
      ]
    }
  }

  render() {
    return (
      <div className="film-box">
        <h2>UK opening this week</h2>
        <FilmList films={this.state.films} />
        <ShowtimesButton>Get showtimes</ShowtimesButton>
    </div>
    )
  }

}

export default FilmBox;
