import React from 'react'
import SignupInputContent from './SignupInputContent'
import { stringSignup } from '../../../utill/constant/constant'

const SignupInputContainer = ({setError}) => {
  return (
    <div className='h-90vh flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center text-2xl'>{stringSignup}</div>
      <SignupInputContent setError={setError} />
    </div>
  )
}

export default SignupInputContainer