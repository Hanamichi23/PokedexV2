import React, { Component } from 'react'
import "../styles/BaseStats.css"

export default class BaseStats extends Component {

    render() {
        return (
            <div className="stats">
                <h3>Base Stats</h3>
                <p>HP: {this.props["HP"]}</p>
                <p>Attack: {this.props["Attack"]}</p>
                <p>Defense: {this.props["Defense"]}</p>
                <p>Sp. Attack: {this.props["Sp. Attack"]}</p>
                <p>Sp. Defense: {this.props["Sp. Defense"]}</p>
                <p>Speed: {this.props["Speed"]}</p>
            </div>
        );
    }
}