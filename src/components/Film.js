import React, { Component } from 'react';

class Film extends Component {

  render() {
    return (<div>
      <h3>{this.props.name}</h3>
      <p>showtimes</p>
    </div>)
  }
}

export default Film;
