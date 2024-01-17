import React, { useEffect, useState } from 'react'
import PostDescContent from './postDescContent/PostDescContent'
import PostImgContent from './postImgContent/PostImgContent'
import PostHeartContent from './postHeartContent/PostHeartContent'
import { getPosts } from '../../../utill/functions/post'

const PostContent = ({user, commentsLength, location, setCommentsLength}) => {
    const [postAuthId, setPostAuthId] = useState('')
    const [postAuthNickname, setPostAuthNickname] = useState('')
    const [postAuthPhoto, setPostAuthPhoto] = useState('')
    const [postEdit, setPostEdit] = useState(false)
    const [postDesc, setPostDesc] = useState('')
    const [files, setFiles] = useState([])
    const [post, setPost] = useState({})
    const [heart, setHeart] = useState(false)
    const [heartLength, setHeartLength] = useState(0)

    useEffect(() => {
        getPosts(location, setPost, setHeart, setHeartLength, setPostDesc, setPostAuthId, setPostAuthNickname, setPostAuthPhoto, setFiles, setCommentsLength, user)
    }, [])
    
    
    return (
        <div className='p-5 border-b mb-12'>
            <PostDescContent postAuthPhoto={postAuthPhoto} postAuthNickname={postAuthNickname} postAuthId={postAuthId} postEdit={postEdit} user={user} setPostEdit={setPostEdit} location={location}/>
            <PostImgContent postEdit={postEdit} postDesc={postDesc} files={files} post={post} setPostDesc={setPostDesc} setFiles={setFiles} location={location} setPostEdit={setPostEdit} />
            <PostHeartContent setHeart={setHeart} heart={heart} setHeartLength={setHeartLength} commentsLength={commentsLength} location={location} user={user} heartLength={heartLength} />
        </div>
    )
}

export default PostContent