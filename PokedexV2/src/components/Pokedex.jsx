import React, { Component } from 'react'
import "../styles/Pokedex.css"
import pokemon_names from '../pokemon_names';

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterPokemons: [],
            searched: "",
        }

        this.inputCantidad = React.createRef();
    }


    // AREA DE TRABAJO --> Usemos el ciclo de vida nuevamente para setear por unica vez lo que nos llega por props el filterPokemons
    componentDidMount()
    {
        this.setState({ filterPokemons: this.props.pokemons})
        this.getPokemon(this.props.pokemons[0].url);
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.pokemons !== this.props.pokemons)
            this.setState({ filterPokemons: this.props.pokemons});
    }

    getPokemon = (url) => {
        // Aqui esperas obtener los datos del pokemon y luego enviarlo con la funcion updateParent
        // Solamente necesitas el name, id y types
        this.props.cargandoPokemon(true);
        fetch(url)
        .then( response =>
          response.json())
          .then(data => {
            let pokemonData = [pokemon_names[data.id-1], data.id, data.types, data.stats];  // Cambio a esta línea porque los nombres en el array están mejor armados para usar en los links a Bulbapedia
            //let pokemonData = [this.capitalizeFirstLetter(data.name), data.id, data.types, data.stats];
            this.props.updateParent( {pokemon: pokemonData} );
            this.props.cargandoPokemon(false);
          });
    }


    
    //Aqui deberían ir las funciones para los eventos del input y del button

    handleFilter = (event) => {
        /* Filtrar los pokemons segun lo que le llegue por evento al event.target.value
        Pueden usar un console.log para ver que devuelve */
        const input = event.target.value;
        let pokemonsFiltrados = this.props.pokemons.filter( pokemon => pokemon.name.toLowerCase().startsWith(input.toLowerCase()));
        this.setState({ filterPokemons: pokemonsFiltrados, searched: input });
    }

    handleFilterSubmit = (event) => {
        event.preventDefault();
    }

    handleClean = (event) => {
       /* Debo evitar que se renderice nuevamente la pagina
        Debo setear todos los pokemons nuevamente y limpiar el input */
        //no es necesario el preventDefault() porque lo hago en el handler del submit
        //event.preventDefault();
        this.setState({ filterPokemons: this.props.pokemons, searched: "" });
    }

    handleRandomize = (event) =>
    {
        event.preventDefault();
        const inputActual = this.inputCantidad.current.value;
        if (this.isNormalInteger(inputActual) && parseInt(inputActual) >= 1 && parseInt(inputActual) <= 898)
        {
            this.props.randomize(parseInt(inputActual));
            this.setState( {searched: "" } );
        }
        else
        {
            alert("Por favor ingrese un número entero entre 1 y 898");
            this.inputCantidad.current.value = "";
        }
    }

    isNormalInteger(str)
    {
        str = str.trim();
        if (!str)
        {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    capitalizeFirstLetter(string)
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h2>POKEDEX</h2>
                <form className="pokeSearch" onSubmit={this.handleFilterSubmit}>
                    {/* AREA DE TRABAJO PARA CREAR DOS EVENTOS, uno para el input y otro para el button */}
                    <input type="text" placeholder="Filtra los pokemon" value={this.state.searched} onChange={this.handleFilter} />
                    <input type="button" id="limpiar" value="Limpiar" onClick={this.handleClean} />
                </form>
                <div className="pokeList">
                    {filterPokemons.map(pokemon => (
                        <p key={pokemon.name} onClick={() => this.getPokemon(pokemon.url)} className="pokeOption">{this.capitalizeFirstLetter(pokemon.name)}</p>
                    ))}
                </div>
                <form className="randomDex">
                    <input type="number" placeholder="Cantidad de pokemon" ref={this.inputCantidad} />
                    <button id="randomize" onClick={this.handleRandomize}>Randomize</button>
                </form>
            </div>
        )
    }
}

