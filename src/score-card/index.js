import React, { Component } from 'react'

import './score-card.css'

export default class ScoreCard extends Component {

  _toPointValue = status => status === "Rejected" ? 10 : 1

  render() {
    return (
      <div className="score-card">
        <h1 className="banner">Score:</h1>
        <label className="score">
          {this.props.responseStatuses
              .map(this._toPointValue)
              .reduce((agg, val) => agg + val, 0)}
        </label>
      </div>
    )
  }
}
