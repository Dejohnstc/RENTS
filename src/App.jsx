import './App.css'
import Landingapp from './Landingapp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Landingapp/> }/>
      <Route path='Log' element={<Login/>}/>
      <Route path='Lan' element={<Landingapp/>}/>
      <Route path='Reg' element={<Register/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
