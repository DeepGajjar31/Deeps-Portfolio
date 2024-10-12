import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Projects from './Pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
