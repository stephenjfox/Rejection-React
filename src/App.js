import React from 'react'
import AskList from './ask-list/ask-list'
import generateAsks from './helpers/scaffold'


const asks = generateAsks()

const App = () => {
  return (
    <div className="App">
      <AskList asks={asks} />
    </div>
  )
}

export default App
