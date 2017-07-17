import React, { Component } from 'react'

export default class AskForm extends Component {

  _parseStatusFromRadioGroup() {
    return this.refs.acceptedRadio.checked ? "Accepted" : "Rejected"
  }

  submit = (formSubmitEvent) => {
    // don't submit the page from this event
    if (formSubmitEvent) formSubmitEvent.preventDefault && formSubmitEvent.preventDefault()

    const ask = {
      ask: this.refs.ask.value.trim(),
      askee: this.refs.askee.value.trim(),
      date: new Date(),
      status: this._parseStatusFromRadioGroup()
    }
    // TODO: clear fields
    console.log("Created Ask instance =", ask)
    this.props.onCreateAsk(ask)
  }

  render() {
    return (
      <div className="ask-form">
        <form onSubmit={this.submit} ref="_mainForm">
          <input type="text" placeholder="Who you asked" required ref="askee"></input>
          <input type="text" placeholder="What you asked of them" required ref="ask"></input>
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
          <button onClick={() => this.refs._mainForm.submit()}>Submit</button>
        </form>
      </div>
    )
  }
}
