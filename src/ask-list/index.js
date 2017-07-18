import React, { Component } from 'react'
import Ask from '../ask'

class AskList extends Component {

  makeAsk = askEntity => {
    return (
      <Ask key={askEntity.ask + askEntity.timestamp + Math.random().toFixed(2)}
            ask={askEntity.ask}
            askee={askEntity.askee}
            timestamp={askEntity.timestamp}
            status={askEntity.status} />
    )
  }

  render() {
    return (
      <div>
      {(this.props.asks || [])
        .map(this.makeAsk)
      }
      </div>
    )
  }
}

export default AskList
