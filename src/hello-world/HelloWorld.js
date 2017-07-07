import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = { greeting: 'Hello' }
  }

  toFrench = () => {
    this.setState({
      greeting: 'Bonjour'
    })
  }

  toKorean = () => {
    this.setState({
      greeting: '안녕하세요'
    })
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.toFrench}>Frenchify!</button>
        <button onClick={this.toKorean}>한국말로!</button>
      </div>
    )
  }
}

export default HelloWorld;
