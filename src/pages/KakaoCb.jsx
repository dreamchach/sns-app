import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAccessToken, setNickName, setPhoto, setUserId } from '../utill/redux/authSlice'

const KakaoCb = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
    
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code')
        console.log(code)
        const kakao = async () => {
            const res = await axios.post('http://localhost:4000/auth/kakao/login', {code : code})
            dispatch(setUserId(res.data.auth.googleId))
            dispatch(setNickName(res.data.auth.nickName))
            dispatch(setPhoto(res.data.auth.profilePhoto))
            dispatch(setAccessToken(res.data.accessToken))
        }
        kakao()
    }, [])

    useEffect(() => {
      if(user.accessToken !== '') {
          navigate('/posts')
      }
      }, [user])
    
  return (
    <div></div>
  )
}

export default KakaoCb