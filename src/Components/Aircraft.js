import React, {Component} from "react"

import Loading from "./Loading"

class Aircraft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aircraft: [],
            loading: false,
            utilized: 0
        }
    }

    componentDidMount() {
        let mod_this = this
        this.setState({
            loading: true
        })
        fetch("https://infinite-dawn-93085.herokuapp.com/aircrafts")
        .then(function(response) {
            if (response.ok) {
                return response.json()
            }
          })
          .then(function(myJson) {
              mod_this.setState({
                  aircraft: myJson,
                  loading: false
              }, () => {
                console.log(mod_this.state.aircraft.data[0].ident)
              mod_this.props.clk(mod_this.state.aircraft.data[0].ident)
            })
          })
    }

    DisplayAircraft() {
        let ac = this.state.aircraft
        return (
            <div className="acD posRel hidO selected">
                {
                    <h2>{ac.data[0].ident}</h2>
                }
                <span>Utilization ({this.state.utilized}%)</span>
            </div>
        )
    }

    render() {
        const {aircraft} = this.state

        return (
            <div className="posRel hidO leftD">
                <h1>Aircrafts</h1>
                {
                    !aircraft || aircraft.length <= 0 || this.state.loading ?
                    <Loading /> :
                    this.DisplayAircraft()
                }
            </div>
        )
    }
}

export default Aircraft