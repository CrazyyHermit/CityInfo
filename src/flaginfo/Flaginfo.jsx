import React, {Component} from "react"

class Flaginfo extends Component {
    constructor() {
        super();
        this.state = {
            cityInfo: "placeholder"
        }
    }

    render() {
        return(
            <div id="Flaginfo" hidden="true">
                <h1>This is where the country info will go.</h1>
                <p>{this.state.cityInfo}</p>

                <p>Altho I'm having a few issues remembering how to import states from other files and changing them, this might take a while.</p>
                <a href="#" onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#Flaginfo").hidden = "true";
                    document.querySelector("#container").removeAttribute("hidden")
                }}>Heck</a>
            </div>
        )
    }
}

export default Flaginfo