import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { SelectBodyParts } from './pages/SelectBodyParts';
import { SelectProblems } from './pages/SelectProblems';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectBodyParts/>}/>
        <Route path='/problems' element={<SelectProblems/>}/>
      </Routes>
    </Router>
  )
}
