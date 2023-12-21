import React from 'react'
import Posts from '../pages/Posts'
import { useSelector } from 'react-redux'

const withNoneAuth = (Component) => {
    const Auth = () => {
        const user = useSelector(state => state.auth)
        if (user.accessToken !== '') {
            return <Posts />
        }
        return <Component />
    }
    return Auth
}

export default withNoneAuth