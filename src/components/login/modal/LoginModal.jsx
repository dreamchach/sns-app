import React from 'react'
import { customStyles } from '../../../utill/modal/custom'
import Modal from 'react-modal'
import { constCheck } from '../../../utill/constant/constant'

const LoginModal = ({error, setError}) => {
    return (
        <Modal
            isOpen={error !== ''}
            style={customStyles}
        >
            <div className='flex items-center flex-col justify-center gap-5'>
                <div>{error}</div>
                <div>
                    <button 
                        onClick={() => setError('')}
                        className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
                    >
                        {constCheck}
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default LoginModal