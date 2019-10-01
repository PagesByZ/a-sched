import React, {Component} from "react"

import Loading from "./Loading"

class Flights extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flights: [],
            loading: false
        }
    }

    componentDidMount() {
        console.log("Test")
        let mod_this = this
        this.setState({
            loading: true
        })
        fetch("https://infinite-dawn-93085.herokuapp.com/flights")
        .then(function(response) {
            if (response.ok) {
                return response.json()
            }
          })
          .then(function(myJson) {
              console.log(myJson)
              mod_this.setState({
                  flights: myJson,
                  loading: false
              }, () => {
                  mod_this.props.fdata(mod_this.state.flights)
              })
          })
    }

    SendToParent(ev, id) {
        this.props.clk(id)
    }

    DisplayFlights() {
        console.log("display flight")
        let fl = this.state.flights
        let fld = fl.data
        let btnArr = fld.map((obj) => {
            return (
                <button className={"btnFlight " + "btn_" + obj.id} key={obj.id} onClick={(e) => this.SendToParent(e, obj.id)}>
                    <span>{obj.id}</span>
                </button>
            )
        })

        return btnArr
    }

    render() {
        const {flights} = this.state
        return (
            <div className="posRel hidO rightD">
                <h1>Flights</h1>
                <div className="fHolderD cHolder autO">
                {
                    !flights || flights.length <= 0 || this.state.floading ?
                    <Loading /> :
                    this.DisplayFlights()
                }
                </div>
            </div>
            
        )
    }
}

export default Flights