import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("bunmi-token", "my-name-is-bunmi")
    navigate("/product")

  }
  return (
    <main className='sign-in'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit
      }>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Enter your name'
            id='email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            placeholder='Enter your password'
          />
          <small></small>
        </div>
        <button className='login-btn' type='submit'>
          Login
        </button>
      </form>
      <div className='login'>
        <p> Dont Have an account?</p>
        
        <Link  to={'/sign-up'} className="btn" >Sign Up</Link>
      </div>
    </main>
  )
}

export default SignIn
