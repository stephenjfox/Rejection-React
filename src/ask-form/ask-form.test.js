import React from 'react'
import ReactDOM from 'react-dom'
import AskForm from './'

describe('Test Ask Creation Form', () => {

  const getTestMountPoint = () => document.createElement('div')

  test('renders successfully', () => {
    ReactDOM.render(<AskForm />, getTestMountPoint())
  })

  test('passing "onCreateAsk" handler', () => {
    let wasClicked = false;
    const changeState = () => wasClicked = true;

    expect(wasClicked).toEqual(false)

    const askForm = ReactDOM.render(<AskForm onCreateAsk={changeState} />, getTestMountPoint())

    askForm.submit()

    expect(wasClicked).toBe(true)
  })
})
