import React from "react"

interface PersonProps {
  name: string
  age: number
}

class Welcome extends React.Component<PersonProps> {
  render() {
    return (
      <h1>
        Hello {this.props.name} {this.props.age}
      </h1>
    )
  }
}

export default Welcome
