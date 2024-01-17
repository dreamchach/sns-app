import React, { useEffect, useState } from 'react'
import { GiButterfly } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addressHome, addressPosts, addressSignup, logo, stringLogin, stringLogout, stringPost, stringSignup } from '../../utill/constant/constant';
import { logout } from '../../utill/functions/layout';

const Header = () => {
    const user = useSelector(state => state.auth)
    const [Login, setLogin] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(user.accessToken !== '') setLogin(true)
        else setLogin(false)
    }, [user])
    
  return (
    <div className='flex justify-between items-center h-12 px-5 bg-basic-blue shadow fixed top-0 w-full z-50'>
        <Link to={addressPosts}>
            <div className='flex items-center gap-2.5 text-white text-xl font-bold'>
                <GiButterfly />
                <div>{logo}</div>
            </div>
        </Link>
        {!Login &&
            <div className='flex flex-wrap items-center justify-center gap-5 text-white'>
                <Link to={addressHome}>
                    <div className='hover:font-bold transition'>
                        {stringLogin}
                    </div>
                </Link>
                <Link to={addressSignup}>
                    <div className='hover:font-bold transition'>{stringSignup}</div>
                </Link>
            </div>
        }
        {Login && 
            <div className='flex flex-wrap items-center justify-center gap-5 text-white'>
                <Link to={addressPosts}>
                    <div className='hover:font-bold transition'>{stringPost}</div>
                </Link>
                <Link to={`/user/${user.id}`}>
                    <div className='hover:font-bold transition'>{user.nickName}</div>
                </Link>
                <div
                    className='hover:font-bold transition'
                    onClick={() => logout(dispatch)}
                >{stringLogout}</div>
            </div>
        }
    </div>
  )
}

export default Header

/*
                <Link to='/friend#add'>
                    <div className='hover:font-bold transition'>친구</div>
                </Link>
*/