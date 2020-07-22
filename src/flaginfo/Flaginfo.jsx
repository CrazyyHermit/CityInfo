import React, {Component} from "react"

class Flaginfo extends Component {
    render() {
        return(
            <div id="Flaginfo">
                <h1>This is where the country info will go.</h1>
                <p>{this.props.info}</p>

                <p>Altho I'm having a few issues remembering how to import states from other files and changing them, this might take a while.</p>
                <a href="#" onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#Flaginfo").hidden = "true";
                    document.querySelector("#container").removeAttribute("hidden")
                }}>Shit, go back.</a>
            </div>
        )
    }
}

export default Flaginfo