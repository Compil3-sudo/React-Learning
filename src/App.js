import React from 'react'
import Chapter1 from './tutorial/1-useState/setup/1-error-example'
import Chapter2 from './tutorial/1-useState/setup/2-useState-basics'
import Chapter3 from './tutorial/1-useState/setup/3-useState-array'
import Chapter4 from './tutorial/1-useState/setup/4-useState-object'
import Chapter5 from './tutorial/1-useState/setup/5-useState-counter'

function App() {
  return (
    <div className='container'>
      <h2>Advanced Tutorial</h2>
      {/* TODO: add navbar with react router */}
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
    </div>
  )
}

export default App
