import React, { Component } from "react"
import TemperatureInput from "./TemperatureInput"
import BoilingVerdict from "./BoilingVerdict"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  temperature: string
  scale: string
}

class Calculator extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      temperature: "",
      scale: "c"
    }
  }
  tryConvert = (temperature: string, scale: string) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ""
    }
    let output
    if (scale === "f") {
      output = (input - 32) / 1.8
    } else {
      output = input * 1.8 + 32
    }

    output = Math.round(output * 1000) / 1000
    return output
  }

  handleChange = (scale: string) => (value: string) => {
    this.setState({
      temperature: value,
      scale
    })
  }
  render() {
    console.log(this.state)
    const { scale, temperature } = this.state
    const celsius = scale === "f" ? this.tryConvert(temperature, scale) : temperature
    const fahrenheit = scale === "c" ? this.tryConvert(temperature, scale) : temperature
    return (
      <div>
        <TemperatureInput title="C" temperature={celsius} onTemperatureChange={this.handleChange("c")} />
        <TemperatureInput title="F" temperature={fahrenheit} onTemperatureChange={this.handleChange("f")} />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator
