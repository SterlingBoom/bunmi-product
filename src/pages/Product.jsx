import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('bunmi-token')
    if (!token) {
      navigate('/sign-in')
    }
  }, [navigate])
  return <div>Welcome to Product</div>
}

export default Product
