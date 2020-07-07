import React, { Component } from "react"
import "./Flags.css"
import Flaginfo from "../flaginfo/Flaginfo";

class Flags extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            isLoaded: false
        }
    }
    async componentDidMount() {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json()
        this.setState({
            countries: data,
            isLoaded: true
        })
        console.log(this.state)
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded){
            return <div>Loading...</div>;
        } else {
            return (
                <div id="container">
                    <div id="flagContainer">
                        {this.state.countries.map(item => {
                            return (
                                <div id="containerItem">
                                    <p id="flagText">
                                        {item.name}
                                    </p>
                                    <a id="flagButton" href="#" onClick={(e) => {
                                        document.querySelector("#Flaginfo").removeAttribute("hidden")
                                        document.querySelector("#container").hidden = "true";
                                        return (
                                            e.preventDefault(),
                                            console.log("hello")
                                        )
                                    }}>
                                        <img src={item.flag}  id="flag"/>
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                </div>
            )
        }
    }
}


export default Flags