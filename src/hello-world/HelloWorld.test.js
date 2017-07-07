import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

let div = document.createElement('div');

beforeEach(() => {
  div = document.createElement('div')
})

test('renders without fail', () => {
  ReactDOM.render(<HelloWorld />, div)
})

test('renders with default state', () => {
  const render = ReactDOM.render(<HelloWorld />, div)

  expect(render.state.greeting).toBe('Hello')
  expect(render.props.name).toBeUndefined()
})

test('renders passed props', () => {
  const render = ReactDOM.render(
    <HelloWorld name="Stephen"/>,
    div
  )

  expect(render.props.name).toBe("Stephen")
})

test('renders new greeting with Frenchify click()', () => {
  const render = ReactDOM.render(
    <HelloWorld name="Fox"/>,
    div
  )

  // pre-condition check
  expect(render.state.greeting).toBe('Hello')

  // internal state change
  render.toFrench()

  // post-condition check
  expect(render.state.greeting).toBe('Bonjour')
})

test('renders new greeting with Korean click()', () => {
  const render = ReactDOM.render(
    <HelloWorld name="김문호"/>,
    div
  )

  // pre-condition check
  expect(render.state.greeting).toBe('Hello')

  // internal state change
  render.toKorean()

  // post-condition check
  expect(render.state.greeting).toBe('안녕하세요')
})
