import React, { useState } from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { stringProfileChange } from '../../../utill/constant/constant';

const UsersAuthMenu = ({setUserModal}) => {
    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='relative text-xl flex flex-col items-center'>
        <div
            className='relative right-16' 
            onClick={() => setOpenMenu(!openMenu)}
        >
            <GoKebabHorizontal />
        </div>                            
        {openMenu &&
            <div className='right-0 absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow w-40 '>
                <div
                    onClick={() => {
                        setUserModal(true)
                        setOpenMenu(false)
                    }}
                    className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                >
                    {stringProfileChange}
                </div>
            </div>
        }
    </div>
  )
}

export default UsersAuthMenu