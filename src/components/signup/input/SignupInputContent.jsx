import React, { useEffect, useState } from 'react'
import SignPhoto from './SignPhoto'
import SignFile from './SignFile'
import { onclick } from '../../../utill/functions/signup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addressPosts, idInput, nicknameInput, passwordInput, stringSignup, typePassword, typeText } from '../../../utill/constant/constant'

const SignupInputContent = ({setError}) => {
    const [nickname, setNickname] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [signDisabled, setSignDisabled] = useState(true)
    const [photo, setPhotoFile] = useState('')
    const [file, setFile] = useState({})
    const user = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(user.accessToken !== '') {
            navigate(addressPosts)
        }
    }, [user])

    useEffect(() => {
      if(id !== '' && password !== '' && nickname !== '' && photo !== '') {
            if(password.length >= 8) {
                setSignDisabled(false)
            } else setSignDisabled(true)
        }else setSignDisabled(true)
    }, [id, password, nickname, photo])

  return (
    <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
        <SignPhoto photo={photo} />
        <SignFile setFile={setFile} setPhotoFile={setPhotoFile} />
        <input 
            placeholder={nicknameInput}
            type={typeText}
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            className='border rounded-xl px-5 py-2.5'
        />
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
            onClick={() => onclick(file, id, password, nickname, dispatch, setError)}
            disabled={signDisabled}
            className={`${signDisabled ? 'bg-none-button text-none-text' : 'bg-basic-blue text-white hover:shadow-xl hover:bg-hover-blue'} w-full border py-2.5 px-5 rounded-xl text-bold shadow transition`}
        >
            {stringSignup}
        </button>
    </div>
  )
}

export default SignupInputContent