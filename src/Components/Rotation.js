import React, {Component} from "react"

class Rotation extends Component {
    constructor(props) {
        super(props)
    }

    ShowRotation() {
        let fld = this.props.fd.data
        let rot = this.props.rt
        let rotArr = []
        if (rot.length > 0) {
            rot.forEach(element => {
                if (fld.filter(function(e) { return e.id === element }).length > 0) {
                    let fldDFiltered = fld.filter(function(e) { return e.id === element })
                    rotArr.push(
                        <div className="rotFlightD posRel" key={fldDFiltered[0].id}>
                            <span>{fldDFiltered[0].id}</span>
                            <span className="flightMsgS posAbs">Click to Remove from Rotation</span>
                            <div className="fDataInfoD posRel hidO">
                                <div className="leftFDID">
                                    <span>{fldDFiltered[0].origin}</span>
                                    <span>{fldDFiltered[0].readable_departure}</span>
                                </div>
                                <div className="centerFDID">

                                </div>
                                <div className="rightFDID">
                                    <span>{fldDFiltered[0].destination}</span>
                                    <span>{fldDFiltered[0].readable_arrival}</span>
                                </div>
                            </div>
                        </div>
                        /*<button className={"btnFlight " + "btn2_" + fldDFiltered[0].id} key={fldDFiltered[0].id}>
                            <span>{fldDFiltered[0].id}</span>
                        </button>*/
                    )
                  }
            })
        }
        /*let rotBtn = fld.map((obj) => {
            return (
                <button className={"btnFlight " + "btn2_" + obj.id} key={obj.id}>
                    <span>{obj.id}</span>
                </button>
            )
        })

        return rotBtn*/

        return rotArr
    }

    render() {
        return (
            <div className="posRel hidO centerD">
                <h1>Rotation {this.props.acn}</h1>
                <div className="fHolderD cHolder autO">
                    {
                        this.ShowRotation()
                    }
                </div>
            </div>
        )
    }
}

export default Rotation