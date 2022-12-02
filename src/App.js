import React from 'react'

import Chapter1 from './tutorial/1-useState/setup/1-error-example'
import Chapter2 from './tutorial/1-useState/setup/2-useState-basics'
import Chapter3 from './tutorial/1-useState/setup/3-useState-array'
import Chapter4 from './tutorial/1-useState/setup/4-useState-object'
import Chapter5 from './tutorial/1-useState/setup/5-useState-counter'

function App() {
  return (
    <>
      <div className='container'>
        <h2>Advanced Tutorial</h2>
        {/* <BrowserRouter>
          <NavLink to="/chapter1-1">
            Chapter 1-1
          </NavLink>
          <NavLink to="/chapter1-2">
            Chapter 1-2
          </NavLink>
          <NavLink to="/chapter1-3">
            Chapter 1-3
          </NavLink>
          <NavLink to="/chapter1-4">
            Chapter 1-4
          </NavLink>
          <NavLink to="/chapter1-5">
            Chapter 1-5
          </NavLink>
          <Routes>
            <Route exact path="/chapter1-1" element={<Chapter1 />} />
            <Route exact path="/chapter1-2" element={<Chapter2 />} />
            <Route exact path="/chapter1-3" element={<Chapter3 />} />
            <Route exact path="/chapter1-4" element={<Chapter4 />} />
            <Route exact path="/chapter1-5" element={<Chapter5 />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
