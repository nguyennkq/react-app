import React from "react"

const lists = ["BMW", "Toyota", "Honda"]

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    console.log("constructor")
    // this.state = {
    //   time: new Date().toLocaleTimeString()
    // }
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
      // name: this.props.name
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetchApi().then((res) => {
      this.setState((prevState: any) => ({
        ...prevState,
        lists: res
      }))
    })
    const seconds = document.querySelector("h3")
    console.log(seconds)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
    // if (this.state.darkMode) {
    //   const value = document.querySelector<HTMLInputElement>("input")
    //   console.log("Value in Input", value?.value)
    // }
    if (this.state.lists.length === 0) {
      fetchApi().then((res) =>
        this.setState((prevState: any) => ({
          ...prevState,
          lists: res
        }))
      )
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
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
  toggleDarkMode = () => {
    this.setState((prevState: any) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    // console.log(this.props)
    console.log(this.state)
    console.log("render")
    return (
      <div>
        {/* <h2>It is {this.state.time}</h2> */}
        <h2>It is {this.state.time.created}.</h2>
        <h3>Seconds: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type="text" />}
      </div>
    )
  }
}
