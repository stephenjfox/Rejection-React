import React, { Component } from 'react'

export default class AskForm extends Component {

  click = () => {
    // TODO: clear fields
    this.props.onCreateAsk({})
  }

  render() {
    return (
      <div className="ask-form">
        // TODO
      </div>
    )
  }
}
