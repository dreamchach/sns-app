import React, { useEffect, useState } from 'react'
import Line from './Line'
import Buttons from './Buttons'
import { useDispatch } from 'react-redux'
import { idInput, passwordInput, stringLogin, typePassword, typeText } from '../../../utill/constant/constant'
import { localLogin } from '../../../utill/functions/login'

const InputContent = ({setError}) => {
    const [loginDisabled, setLoginDisabled] = useState(true)
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if(id !== '' && password !== '') {
            setLoginDisabled(false)
        }else setLoginDisabled(true)
    }, [id, password])

    return (
        <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
            <input 
                placeholder={idInput}
                type={typeText}
                value={id}
                onChange={(event) => setId(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
            />
            <input 
                placeholder={passwordInput}
                type={typePassword}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
            />
            <button
                disabled={loginDisabled}
                onClick={() => localLogin(id, password, dispatch, setError)}
                className={`w-full border py-2.5 px-5 rounded-xl ${loginDisabled ? 'bg-none-button text-none-text' : 'bg-basic-blue text-white hover:shadow-xl hover:bg-hover-blue'} text-bold shadow transition`}
            >
                {stringLogin}
            </button>
            <Line />
            <Buttons />
        </div>
    )
}

export default InputContent