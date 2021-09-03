import React, { Component } from 'react'
import "../styles/BaseStats.css"

export default class BaseStats extends Component {

    render() {
        return (
            <div className="stats">
                <h3>Base Stats</h3>
                <table style={{visibility: this.props.cargando ? "hidden" : "visible"}}>
                    <tbody>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[0].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[0].base_stat >= 60 && this.props.stats[0].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[0].base_stat >= 100) ? " altaStat" : ""}`}>HP:</td>
                            <td className={`numeroStat${(this.props.stats[0].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[0].base_stat >= 60 && this.props.stats[0].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[0].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[1].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[1].base_stat >= 60 && this.props.stats[1].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[1].base_stat >= 100) ? " altaStat" : ""}`}>Attack:</td>
                            <td className={`numeroStat${(this.props.stats[1].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[1].base_stat >= 60 && this.props.stats[1].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[1].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[2].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[2].base_stat >= 60 && this.props.stats[2].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[2].base_stat >= 100) ? " altaStat" : ""}`}>Defense:</td>
                            <td className={`numeroStat${(this.props.stats[2].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[2].base_stat >= 60 && this.props.stats[2].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[2].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[3].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[3].base_stat >= 60 && this.props.stats[3].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[3].base_stat >= 100) ? " altaStat" : ""}`}>Sp. Attack:</td>
                            <td className={`numeroStat${(this.props.stats[3].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[3].base_stat >= 60 && this.props.stats[3].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[3].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[4].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[4].base_stat >= 60 && this.props.stats[4].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[4].base_stat >= 100) ? " altaStat" : ""}`}>Sp. Defense:</td>
                            <td className={`numeroStat${(this.props.stats[4].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[4].base_stat >= 60 && this.props.stats[4].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[4].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td className={`nombreStat${(this.props.stats[5].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[5].base_stat >= 60 && this.props.stats[5].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[5].base_stat >= 100) ? " altaStat" : ""}`}>Speed:</td>
                            <td className={`numeroStat${(this.props.stats[5].base_stat < 60) ? " bajaStat" : ""}
                                                    ${(this.props.stats[5].base_stat >= 60 && this.props.stats[5].base_stat < 100) ? " normalStat" : ""}
                                                    ${(this.props.stats[5].base_stat >= 100) ? " altaStat" : ""}`}>{this.props.stats[5].base_stat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}