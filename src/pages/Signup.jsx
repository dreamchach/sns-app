import React, { useState } from 'react'
import Header from '../components/laylout/Header'
import withNoneAuth from '../components/withNoneAuth' 
import SignupInputContainer from '../components/signup/input/SignupInputContainer'
import SignupModal from '../components/signup/modal/SignupModal'

const Signup = () => {
  const [error, setError] = useState('')

  return (
    <div>
      <Header />
      <SignupInputContainer setError={setError} />
      {error !== '' && <SignupModal error={error} setError={setError}/>}
    </div>
  )
}

export default withNoneAuth(Signup)