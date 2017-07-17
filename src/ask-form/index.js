import React, { Component } from 'react'

export default class AskForm extends Component {

  _parseStatusFromRadioGroup() {

    console.log("radio group state:", {
      accepted: this.refs.acceptedRadio,
      rejected: this.refs.rejectedRadio
    })

  }

  submit = (formSubmitEvent) => {
    if (formSubmitEvent) {
      formSubmitEvent.preventDefault()
      const ask = {
        ask: this.refs.ask.value.trim(),
        askee: this.refs.askee.value.trim(),
        date: this.refs.datetime,
        status: this._parseStatusFromRadioGroup()
      }
      // TODO: clear fields
      console.log("Created Ask instance =", ask)
    }
    this.props.onCreateAsk({})
  }

  render() {
    return (
      <div className="ask-form">
        <form onSubmit={this.submit}>
          <input type="text" placeholder="Who you asked" required ref="askee"></input>
          <input type="text" placeholder="What you asked of them" required ref="ask"></input>
          <input type="datetime-local" ref="datetime" />
          <div className="radio">
            <label>
              <input type="radio" name="status" value="accepted" defaultChecked ref="acceptedRadio"/>Accepted
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="status" value="rejected" ref="rejectedRadio"/>Rejected
            </label>
          </div>
          <input type="submit" value="Record 'Ask'" />
        </form>
      </div>
    )
  }
}
