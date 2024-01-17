import React from 'react'
import { altProfile } from '../../../utill/constant/constant'

const SignPhoto = ({photo}) => {
    return (
        <div className='w-52 h-52 border rounded-full overflow-hidden flex items-center justify-center'>
            {photo !== '' && <img src={photo} alt={altProfile}/>}
        </div>
    )
}

export default SignPhoto