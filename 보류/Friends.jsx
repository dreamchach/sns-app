import React, { useEffect, useState } from 'react'
import Header from '../src/components/laylout/Header'
import { Link, useLocation } from 'react-router-dom'

const Friends = () => {
    const location = useLocation()
    const [hash, setHash] = useState('#add')
    useEffect(() => {
        setHash(location.hash)
    }, [location.hash])
    
    console.log(hash)
  return (
    <div>
        <Header />
        <div>
            <div className='flex justify-center mt-20 gap-px w-full'>
                <Link to='#add'>
                    <div className={`transition ${hash === '#add' ? 'bottom-4 h-12' : 'h-8'} hover:bg-hover-blue text-white relative w-24 flex items-center justify-center bg-basic-blue rounded-t-xl py-1 px-2.5`}>
                        친구 추가
                    </div>
                </Link>
                <Link to='#confirm'>
                    <div className={`transition ${hash === '#confirm' ? 'bottom-4 h-12' : 'h-8'} hover:bg-hover-blue text-white relative w-24 flex items-center justify-center bg-basic-blue rounded-t-xl py-1 px-2.5`}>
                        친구 요청
                    </div>
                </Link>
                <Link to='#friends'>
                    <div className={`transition ${hash === '#friends' ? 'bottom-4 h-12' : 'h-8'} hover:bg-hover-blue text-white relative w-24 flex items-center justify-center bg-basic-blue rounded-t-xl py-1 px-2.5`}>
                        친구들
                    </div>
                </Link>
            </div>
            <div className='absolute top-36 w-full flex justify-center h-80vh'>
                {hash === '#add' && 
                    <div className='w-11/12 border rounded-xl min-w-260'>
                        {
                            <div className='flex p-5 items-center justify-between border-b'>
                                <div className='flex items-center gap-2.5'>
                                    <div className='w-12 h-12 border rounded-full'></div>
                                    <div>userName</div>
                                </div>
                                <button className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>+ 친구 추가</button>
                            </div>
                        }
                    </div>
                }
                {hash === '#confirm' && 
                    <div className='w-11/12 border rounded-xl min-w-260'>
                    {
                        <div className='flex p-5 items-center justify-between border-b'>
                            <div className='flex items-center gap-2.5'>
                                <div className='w-12 h-12 border rounded-full'></div>
                                <div>userName</div>
                            </div>
                            <div>
                                <button className='mr-2.5 bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>친구 수락</button>
                                <button className='bg-none-text hover:bg-none-button shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition'>친구 거절</button>
                            </div>
                        </div>
                    }
                    </div>
                }
                {hash === '#friends' &&
                    <div className='w-11/12 border rounded-xl min-w-260'>
                    {
                        <div className='flex p-5 border-b items-center justify-between'>
                            <div className='flex items-center gap-2.5'>
                                <div className='w-12 h-12 border rounded-full'></div>
                                <div>userName</div>
                            </div>
                            <button className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>- 친구 삭제</button>
                        </div>
                    }
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Friends