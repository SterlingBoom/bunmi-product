function SignUp() {
  return (
    <main className='sign-in'>
      <h2>Sign Up</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Enter your name' id='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Enter your email'
            id='email'
            required
          />
          <small></small>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='e.g AdaLovelace?$'
            required
          />
        </div>
        <button>Sign Up</button>
      </form>
    </main>
  )
}

export default SignUp
