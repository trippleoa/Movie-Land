import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { Routes,Route } from 'react-router-dom';
function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/'element={<Home/>} ></Route>
      <Route path='/About'element={<About/>} ></Route>
    </Routes>
      
    </>
  )
}

export default App
