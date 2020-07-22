import React, { Component } from "react"
import "./Flags.css"
import Flaginfo from "../flaginfo/Flaginfo";

class Flags extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            isLoaded: false,
            info: "none",
        };
        this.sendinfo = this.sendinfo.bind(this);
    }

    sendinfo(passedinfo) {
        this.setState(state => ({
            info: passedinfo
        }));
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
                <div id="Flags">
                    <div id="container">
                        <div id="flagContainer">
                            {this.state.countries.map(item => {
                                return (
                                    <div id="containerItem">
                                        <p id="flagText">
                                            {item.name}
                                        </p>
                                        <a id="flagButton" href="#" onClick={(e) => {
                                            e.preventDefault();
                                            this.sendinfo(item.name);
                                            let info = document.querySelector("#Flaginfo");

                                            info.removeAttribute("hidden");
                                            document.querySelector("#container").hidden = "true";
                                        }}>
                                            <img src={item.flag}  id="flag"/>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div id="Flaginfo" hidden="true">
                        <Flaginfo info={this.state.info}/>
                    </div>
                </div>
            )
        }
    }
}


export default Flags