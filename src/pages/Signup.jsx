import React, { useState } from 'react'
import Header from '../components/laylout/Header'

const Signup = () => {
  const [nickname, setNickname] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const fileupload = (file) => {
    const formData = new FormData()
    formData.append('file', file[0])
    console.log(formData)
  }

  return (
    <div>
        <Header />
        <div className='h-90vh flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-2xl'>SIGN UP</div>
            <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
              <div className='w-52 h-52 border rounded-full'></div>
              <div>
                <label htmlFor='file' className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-2.5 py-1 rounded text-white relative bottom-8 left-14'>Edit</label>
                <input className='hidden' id='file' type='file' accept='image/*' onChange={(event) => fileupload(event.target.files)}/>  
              </div>
              <input 
                placeholder='닉네임을 입력하세요' 
                type='text' 
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <input 
                placeholder='아이디를 입력하세요' 
                type='text' 
                value={id}
                onChange={(event) => setId(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <input 
                placeholder='비밀번호를 입력하세요'
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <button
                className='w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
              >
                회원가입
              </button>
            </div>
        </div>
    </div>
  )
}

export default Signup