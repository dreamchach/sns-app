import React from 'react'
import UsersAuth from './UsersAuth'
import UsersAuthMenu from './UsersAuthMenu'
import UsersAuthModal from './UsersAuthModal'

const UsersProfileContainer = ({userPhoto, nickname, id, user, setUserModal, userModal, setNickname, setUserPhoto}) => {
  return (
    <div className='flex justify-between items-center gap-2.5 px-5'>
        <UsersAuth userPhoto={userPhoto} nickname={nickname} id={id} />
        {!user.socialLogin && id === user.id && <UsersAuthMenu setUserModal={setUserModal} />}
        {userModal && <UsersAuthModal userModal={userModal} userPhoto={userPhoto} nickname={nickname} setNickname={setNickname} setUserModal={setUserModal} setUserPhoto={setUserPhoto} user={user} />}                          
    </div>
  )
}

export default UsersProfileContainer