import React from "react"

export default class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    // this.state = {
    //   time: new Date().toLocaleTimeString()
    // }
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
      // name: this.props.name
    }
  }

  getTime = () => {
    // this.setState({
    //   time: new Date().toLocaleTimeString()
    // })
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        ...this.state.seconds,
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* <h2>It is {this.state.time}</h2> */}
        <h2>It is {this.state.time.created}.</h2>
        <h3>Seconds: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
