import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
