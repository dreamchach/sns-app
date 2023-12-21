import React from 'react'
import Login from '../pages/Login'
import { useSelector } from 'react-redux'

const withAuth = (Component) => {
    const Auth = () => {
        const user = useSelector(state => state.auth)
        if (user.accessToken === '') {
            return <Login />
        }
        return <Component />
    }
    return Auth
}

export default withAuth