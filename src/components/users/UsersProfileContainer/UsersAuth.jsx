import React from 'react'

const UsersAuth = ({userPhoto, nickname, id}) => {
  return (
    <div className='flex gap-2.5 items-center'>
        <div className='w-12 h-12 border rounded-full overflow-hidden flex items-center justify-center'>
            <img src={userPhoto} alt={nickname} />
        </div>
        <div>
            <div>{nickname}</div>
            <div className='text-xs text-none-text'>{id}</div>
        </div>
    </div>
  )
}

export default UsersAuth