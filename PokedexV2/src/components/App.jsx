import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import BaseStats from './BaseStats';
import pokemon_names from '../pokemon_names';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: ["", "", [], [], ""],
      pokemons: [],
      loadingPokemon: false,
      cuentaRegresivaLoading: 5.0,
      loading: false                  // Un loader siempre es buena practica cuando no tengo la data todavia; cuando hacemos pedido a una api puede tardar... dejala en false por favor :)
    }

    this.randomPokemons = this.randomPokemons.bind(this);
  }

  intervalID;

  update = (pokemon) => this.setState(pokemon)

  randomPokemons(cantidad)
  {
    let totalNums = [];
    for(let i = 1; i <= 898; i++)
      totalNums.push(i);
    let ranNums = [];
    let i = cantidad;
    let j = 0;
  
    while (i--)
    {
      j = Math.floor(Math.random() * totalNums.length);
      ranNums.push(totalNums[j]);
      totalNums.splice(j, 1);
    }

    let llenandoPokedex = [];
    for(let i = 0; i < cantidad; i++)
    {
      let pokeUrl = "https://pokeapi.co/api/v2/pokemon/"+(ranNums[i]);
      llenandoPokedex.push( { name: pokemon_names[ranNums[i]-1], url: pokeUrl } );
    }
    this.setState( () => { return { pokemons: llenandoPokedex } } );
  }

  componentDidMount()
  { 
    this.intervalID = setInterval( () =>
      this.setState( (state) => { return { cuentaRegresivaLoading: state.cuentaRegresivaLoading - 0.1 } } ), 100);
      
    this.randomPokemons(50);
  }

  componentDidUpdate()
  {
    if (this.state.cuentaRegresivaLoading <= 0.0)
    {
      clearInterval(this.intervalID);
      if (!this.state.loading)
        this.setState( { loading: true });
    }
  }

  getPokemon = () => {
    const { pokemon } = this.state
    if (pokemon[1]?.toString()?.length === 1) return `00${pokemon[1]}`
    if (pokemon[1]?.toString()?.length === 2) return `0${pokemon[1]}`
    if (pokemon[1]?.toString()?.length === 3) return `${pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    const { pokemon } = this.state;

    if (pokemon[2].length === 1) return this.capitalizeFirstLetter(pokemon[2][0].type.name);
    if (pokemon[2].length > 1) {
      for (let index = 0; index < pokemon[2].length; index++) {
        if (index === 0) phrase = this.capitalizeFirstLetter(pokemon[2][index].type.name);
        if (index !== 0) phrase = `${phrase} and ${this.capitalizeFirstLetter(pokemon[2][index].type.name)}`;
      }
      return phrase;
    }
  }

  getBulbapediaUrl = () =>
  {
    return "https://bulbapedia.bulbagarden.net/wiki/"+this.state.pokemon[0]+"_(Pok%C3%A9mon)";
  }

  cargandoPokemon = (cargando) => {
    this.setState({ loadingPokemon: cargando });
  }

  capitalizeFirstLetter(string)
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { loading, pokemons, pokemon } = this.state;
    return loading ? (
      <div className="app">
        <div className="container">
          {(!this.state.loadingPokemon && (pokemon[1] !== "")) ?
            (
              <>
                <a href={this.getBulbapediaUrl()} target="_blank" rel="noreferrer"><img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={pokemon[0]}/></a>
                <p id="name">{`${this.capitalizeFirstLetter(pokemon[0])} is a pokemon type ${this.getTypes()}`}</p>
              </>
            ) : <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          }
        </div>
        {(pokemon[1] !== "") ? <BaseStats stats={this.state.pokemon[3]} cargando={this.state.loadingPokemon} /> : null}
        <Pokedex updateParent={this.update} pokemons={pokemons} randomize={this.randomPokemons} cargandoPokemon={this.cargandoPokemon}/>
      </div>
    ) : (
      <>
        <h1 className="cuentaRegresiva">{this.state.cuentaRegresivaLoading.toFixed(1)}</h1>
        <div className="warning">
          <h1>GRACIAS POR VISITAR MI POKEDEX 😁</h1>
        </div>
      </>
    )
  }
}