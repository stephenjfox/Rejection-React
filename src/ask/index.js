import React, { Component } from 'react'
import Ask from './ask'

export default class AskComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          {this.props.ask} {this.props.status}
        </div>
        <div>
          {this.props.askee} {this.props.timestamp}
        </div>
      </div>
    )
  }
}
