import React, { Component } from "react";

import axios from "axios";

class Dish extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=5").then(res => {
      const pokemons = res.data['results'];
      this.setState({ pokemons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.pokemons.map(pokemon => <li>{pokemon.name}</li>)}
      </ul>
    );
  }
}

export default Dish;
