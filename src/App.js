import React from 'react'
import AskList from './ask-list'
import AskForm from './ask-form'
import ScoreCard from './score-card'

const APP_STORAGE_KEY = "Rejection-App-State"

class App extends React.Component {

  _loadPersistedState() {

    if (window.localStorage) {
      console.log("-> retrieving from localStorage")
      const stateAsString = localStorage.getItem(APP_STORAGE_KEY)
      const restoredState = JSON.parse(stateAsString)
      const ret = (restoredState && restoredState.asks) || []
      return ret
    }

    return []
  }

  _persistState() {
    if (window.localStorage) {
      console.log("-> persisting to localStorage")
      localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(this.state))
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      asks: this._loadPersistedState()
    }
  }

  createAsk = (ask) => {
    this.setState(oldState => ({
      // functional-style append
      asks: [...oldState.asks, ask]
    }))

    this._persistState()
  }

  render() {
    return (
      <div className="App">
        <AskList asks={this.state.asks} />
        <AskForm onCreateAsk={this.createAsk} />
        <ScoreCard responseStatuses={this.state.asks.map(({ status }) => status)} />
      </div>
    )
  }
}

export default App
