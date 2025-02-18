import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Intro from './Components/Intro'



function App() {

  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Intro/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
