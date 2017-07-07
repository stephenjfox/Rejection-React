import React from 'react'
import ReactDOM from 'react-dom'
import AskComponent from './'

describe('Test AskComponent', () => {
  let mountPoint;

  beforeEach(() => {
    // this is something the browser tends to have.
    // we often do via document.getElementById('root')
    mountPoint = document.createElement('div')
  })

  test('Component render() successfully', () => {
    const instance = ReactDOM.render(<AskComponent />, mountPoint)

    expect(instance).toBeDefined()
    expect(instance).toBeTruthy()
    expect(instance.props).toBeTruthy()
  })
})
