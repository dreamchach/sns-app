import React from 'react'
import InputContent from './InputContent'
import { stringLogin } from '../../../utill/constant/constant'

const Input = ({setError}) => {
  return (
    <div className='h-90vh flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center text-2xl'>{stringLogin}</div>
        <InputContent setError={setError}/>
    </div>
  )
}

export default Input