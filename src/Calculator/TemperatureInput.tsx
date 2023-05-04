import React, { Component, ChangeEvent } from "react"

interface Props {
  title: string
  temperature: number | string
  onTemperatureChange: (value: string) => void
}

class TemperatureInput extends Component<Props> {
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const { title, temperature } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput
