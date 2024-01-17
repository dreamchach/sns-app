import React, { useEffect, useState } from 'react'
import Header from '../components/laylout/Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withNoneAuth from '../components/withNoneAuth';
import Input from '../components/login/input/Input';
import LoginModal from '../components/login/modal/LoginModal';
import { addressPosts } from '../utill/constant/constant';

const Login = () => {
    const [error, setError] = useState('')
    const user = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(user.accessToken !== '') {
            navigate(addressPosts)
        }
    }, [user])

    return (
        <div>
            <Header />
            <Input setError={setError}/>
            {error !== '' && <LoginModal error={error} setError={setError}/>}
        </div>
    )
}

export default withNoneAuth(Login)