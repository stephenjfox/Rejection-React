import React from 'react'
import AskList from './ask-list'
import AskForm from './ask-form'

import generateAsks from './helpers/scaffold'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      asks: generateAsks()
    }
  }

  createAsk = (ask) => {
    this.setState((oldState) => {
      return {
        // functional-style append
        asks: [...oldState.asks, ask]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <AskList asks={this.state.asks} />
        <AskForm onCreateAsk={this.createAsk} />
      </div>
    )
  }
}

export default App
