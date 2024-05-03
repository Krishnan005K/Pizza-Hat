import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app' >
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
