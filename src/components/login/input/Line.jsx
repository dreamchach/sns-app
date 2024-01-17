import React from 'react'
import { constOr } from '../../../utill/constant/constant'

const Line = () => {
  return (
    <div className='flex w-full items-center gap-1 text-sm mt-5'>
        <div className='grow h-px border-b'></div>
        <div>{constOr}</div>
        <div className='grow h-px border-b'></div>
    </div>
  )
}

export default Line