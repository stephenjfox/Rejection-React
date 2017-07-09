import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import generateAsks from './helpers/scaffold'

const generateMountPoint = () => document.createElement('div')

test('renders without crashing', () => {
  const div = generateMountPoint()
  ReactDOM.render(<App />, div);
});

test('"asks" data source should be Array-ish', () => {
  const div = generateMountPoint()
  const render = ReactDOM.render(<App />, div);

  expect(render.state.asks).toBeTruthy()
  expect(render.state.asks.length).toBeTruthy()
})

test('createAsk() should be append a new ask', () => {
  const mount = generateMountPoint()
  const render = ReactDOM.render(<App />, mount)

  const oldLength = render.state.asks.length

  render.createAsk(generateAsks(1)[0]) // mutate internal state

  const newLength = render.state.asks.length
  expect(newLength - oldLength).toEqual(1)
})
