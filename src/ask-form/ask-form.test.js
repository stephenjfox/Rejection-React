import React from 'react'
import ReactDOM from 'react-dom'
import AskForm from './'

describe('Test Ask Creation Form', () => {

  const getTestMountPoint = () => document.createElement('div')

  test('renders successfully', () => {
    ReactDOM.render(<AskForm />, getTestMountPoint())
  })

  test('creates an Ask on form submit', () => {

    const backingState = [];

    const changeState = ask => backingState.push(ask)

    const askForm = ReactDOM.render(<AskForm onCreateAsk={changeState} />, getTestMountPoint())

    expect(backingState).toHaveLength(0)

    // dummy test inputs
    askForm.refs.ask.value = "Can I get that car for 50% off?"
    askForm.refs.askee.value = "Hyundai car salesman"
    askForm.refs.acceptedRadio.checked = true

    askForm.submit({
      preventDefault: () => console.log("Default prevented")
    })

    expect(backingState).toHaveLength(1)
  })
})
