import React, { Component } from 'react'
import "../styles/Pokedex.css"

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterPokemons: [],
            searched: "",
        }
    }


    // AREA DE TRABAJO --> Usemos el ciclo de vida nuevamente para setear por unica vez lo que nos llega por props el filterPokemons
    componentWillMount()
    {
        this.setState({ filterPokemons: this.props.pokemons})
    }

    getPokemon = (id) => {
        // Aqui esperas obtener los datos del pokemon y luego enviarlo con la funcion updateParent
        // Solamente necesitas el name, id y types
        let pokemonBuscado = this.state.filterPokemons.find( pokemon => pokemon.id === id);
        this.props.updateParent({pokemon: [pokemonBuscado.name, id, pokemonBuscado.type] });
    }


    
    //Aqui deberían ir las funciones para los eventos del input y del button

    handleFilter = (event) => {
        /* Filtrar los pokemons segun lo que le llegue por evento al event.target.value
        Pueden usar un console.log para ver que devuelve */
        const input = event.target.value;
        let pokemonsFiltrados = this.props.pokemons.filter( pokemon => pokemon.name.toLowerCase().startsWith(input.toLowerCase()));
        this.setState({ filterPokemons: pokemonsFiltrados, searched: input });
    }



    handleClean = (event) => {
       /* Debo evitar que se renderice nuevamente la pagina
        Debo setear todos los pokemons nuevamente y limpiar el input */
        event.preventDefault();
        this.setState({ filterPokemons: this.props.pokemons, searched: "" });
    }

    


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h2>POKEDEX</h2>
                <form className="pokeSearch">
                    {/* AREA DE TRABAJO PARA CREAR DOS EVENTOS, uno para el input y otro para el button */}
                    <input type="text" placeholder="Filtra los pokemon" value={this.state.searched} onChange={this.handleFilter} />
                    <button onClick={this.handleClean}>Limpiar</button>
                </form>
                <div className="pokeList">
                    {filterPokemons.map(pokemon => (
                        <p key={pokemon.name} onClick={() => this.getPokemon(pokemon.id)} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

