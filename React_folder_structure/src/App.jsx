import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog/Blog'
// import Navigation from './Navigation'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login/>} /> */}
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App


// 250 - 300 max 