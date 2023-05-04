import React from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      address: "",
      food: "coconut",
      marriage: false
    }
  }

  handleChange = (e) => {
    const { target } = e
    const value = target.type == "checkbox" ? target.checked : target.value
    console.log(target.type)
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input name="marriage" checked={this.state.marriage} type="checkbox" onChange={this.handleChange} />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <textarea name="address" value={this.state.address} onChange={this.handleChange}></textarea>
          <select name="food" onChange={this.handleChange} value={this.state.food}>
            <option value="mango">mango</option>
            <option value="orange">orange</option>
            <option value="banana">banana</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
