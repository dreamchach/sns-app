import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { kakao } from '../utill/functions/login'
import { addressPosts, stringCode } from '../utill/constant/constant'

const KakaoCb = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
    
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get(stringCode)
        kakao(code, dispatch)
    }, [])

    useEffect(() => {
      if(user.accessToken !== '') {
          navigate(addressPosts)
      }
      }, [user])
    
  return (
    <div></div>
  )
}

export default KakaoCb