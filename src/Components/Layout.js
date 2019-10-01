import React, {Component} from "react"
import Loading from "./Loading"
import Flights from "./Flights"
import Aircraft from "./Aircraft"
import Rotation from "./Rotation"

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: true,
            acn: "",
            aloading: false,
            floading: false,
            aircraft: [],
            flights: [],
            utilized: 0,
            firstClick: true,
            rotation: []
        }
    }

    RotationButtonAdded = (ida) => {
        alert("clicked" + ida)
        let inArray = this.ExistInArray(this.state.rotation, this.state.rotation.length, ida)
        if (!inArray) {
            this.setState((prevState) => {
                return {
                    rotation: this.state.rotation.concat(ida)
                }
            })
        }
    }

    WhatIsAircraftName = (acn) => {
        this.setState({
            acn: acn
        })
    }

    SendFlightData = (fd) => {
        this.setState({
            flights: fd
        })
    }

    ExistInArray = (rot, rotl, ida) => {
        let found = false
        for(var i = 0; i < rotl; i++) {
            if (rot[i] === ida) {
                found = true
                break
            }
        }

        return found
    }

    render() {
        const {aircraft, flights} = this.state;
        return (
            <div>
                <div className="mainD posRel hidO">
                    <div className="posRel hidO topD">

                    </div>
                    <div className="posRel hidO bottomD container">
                        <Aircraft clk={this.WhatIsAircraftName} />
                        <Rotation rt={this.state.rotation} acn={this.state.acn} fd={this.state.flights} />
                        <Flights clk={this.RotationButtonAdded} fdata={this.SendFlightData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout