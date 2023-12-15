import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'



function App() {


  return (
    <>
      <div className='App'>
        <BrowserRouter>
        
        <div className="pages">
          <Routes>
            <Route 
            path='/'
            element={<Home/>}
                        />
          </Routes>
        </div>
        
        </BrowserRouter>

        
      </div>
      
    </>
  )
}

export default App
