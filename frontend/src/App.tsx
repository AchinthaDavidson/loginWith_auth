
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Screens/Login'
import { Register } from './Screens/Register'

function App() {
  

  return (

    <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
    
  )
}

export default App
