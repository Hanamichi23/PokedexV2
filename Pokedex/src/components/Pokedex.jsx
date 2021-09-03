import React, { Component } from 'react'
//import {pokeContainer, pokeList, pokeOption} from "../styles/styles"
import "../styles/Pokedex.css"

export default class Pokedex extends Component {

    render() {
        const {updateParent} = this.props
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <div className="pokeList">
                    {this.props.pokemons.map(pokemon => (
                    <p onClick={() => updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type, pokemon.base]})} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}