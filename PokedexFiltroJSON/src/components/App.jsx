import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokedex from "../pokedex.json"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [pokedex[0].name, pokedex[0].id, pokedex[0].type],
      pokemons: pokedex,
      loading: true // Un loader siempre es buena practica cuando no tengo la data todavia
      // cuando hacemos pedido a una api puede tardar... dejala en false por favor :)
    }
  }

  update = (pokemon) => this.setState(pokemon)

  fetchAllPokemons = `https://pokeapi.co/api/v2/pokemon?limit=50`; // URL para obtener los 50 primeros pokemons


  // ESPACIO DE TRABAJO --> Usemos el ciclo de vida para setear los pokemons por unica vez cuando se renderiza el componente
  /*componentWillMount()
  {
    this.setState({ })
  }*/

  // -------------------------------------------------------


  getPokemon = () => {
    const { pokemon } = this.state
    if (pokemon[1]?.toString()?.length === 1) return `00${pokemon[1]}`
    if (pokemon[1]?.toString()?.length === 2) return `0${pokemon[1]}`
    if (pokemon[1]?.toString()?.length === 3) return `${pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    const { pokemon } = this.state;
    // Aqui hay que arreglar algo... ¿Que podra ser?

    if (pokemon[2].length === 1) return pokemon[2][0] // Miremos el objeto  que nos devuelve
    if (pokemon[2].length > 1) {
      for (let index = 0; index < pokemon[2].length; index++) {
        if (index === 0) phrase = pokemon[2][index]
        if (index !== 0) phrase = `${phrase} and ${pokemon[2][index]}`
      }
      return phrase
    }
  }

  render() {
    const { loading, pokemons, pokemon } = this.state;
    return loading ? (
      <div className="app">
        <div className="container">
          {pokemon.length ?
            (
              <>
                <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={pokemon[0]} />
                <p id="name">{`${pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
              </>
            ) : null
          }
        </div>
        <Pokedex updateParent={this.update} pokemons={pokemons} />
      </div>
    ) : (
      <div className="warning">
        <h1>EL LOADER ESTA FALSE</h1>
      </div>
    )
  }
}