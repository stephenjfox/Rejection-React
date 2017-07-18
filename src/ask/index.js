import React, { Component } from 'react'

export default class AskComponent extends Component {

  constructor(props) {
    super(props)
    this.state = Object.assign({}, props)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.ask} {this.state.status}
        </div>
        <div>
          {this.state.askee} {this.state.timestamp}
        </div>
      </div>
    )
  }
}
