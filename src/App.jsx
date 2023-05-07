import Header from './component/Header/Header.jsx'
import Welcome from './component/Welcome/Welcome.jsx'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Product from './pages/Product.jsx'
function App() {
  return (
    <div>
      <Header />
  
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
