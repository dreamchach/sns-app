import React from 'react'

const UsersPostAuth = ({item}) => {
  return (
    <div className='flex justify-between items-center gap-2.5'>
        <div className='flex gap-2.5 items-center'>
            <div className='w-12 h-12 border rounded-full overflow-hidden'>
                <img src={item.author.profilePhoto} alt={item.author.nickName} />
            </div>
            <div>
                <div>{item.author.nickName}</div>
                <div className='text-xs'>{item.author.id}</div>
            </div>
        </div>
        <div>{item.date}</div>                          
    </div>
  )
}

export default UsersPostAuth