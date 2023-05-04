import React, { Component } from "react"

interface Props {
  celsius: number
}

class BoilingVerdict extends Component<Props> {
  render() {
    return <div> {this.props.celsius >= 100 ? "The water would boil" : "The water would not boil"}</div>
  }
}

export default BoilingVerdict
