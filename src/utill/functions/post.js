import instance from "../axios/defaultAxios"
import imageInstance from "../axios/imageAxios"
import { addressPosts, baseApi, commentAddApi, commentDelApi, commentEditApi, getCommentsApi, getPostOneApi, imageApi, korea, postDelApi, postEditDescApi, postEditImgApi, postPostLikeApi, stringEnter } from "../constant/constant"

export const multifileupload = (files, setFiles, setPhotoChange, setPhotoEdit) => {
    let photo = []
    for(let file of files) {
      let reader = new FileReader()

      reader.onload = (data) => {
        photo.push({
            view : data.target.result,
            file
        })
        setFiles(photo)
        setPhotoChange(true)
        setPhotoEdit(true)
      }

      reader.readAsDataURL(file)
    } 
}

export const popupImage = (item, setPhotoEdit, files, setFiles) => {
    setPhotoEdit(true)
    let array = files.filter((i) => i.view !== item)
    setFiles(array)
}

export const getPosts = async (location, setPost, setHeart, setHeartLength, setPostDesc, setPostAuthId, setPostAuthNickname, setPostAuthPhoto, setFiles, setCommentsLength, user) => {
    const id = location.pathname.substring(6)
    const res = await instance.post(getPostOneApi, {id})
    setPost(res.data)
    setHeart(res.data.likes.includes(user.id))
    setHeartLength(res.data.likes.length)
    setPostDesc(res.data.description)
    setPostAuthId(res.data.author.id)
    setPostAuthNickname(res.data.author.nickName)
    setPostAuthPhoto(res.data.author.profilePhoto)
    setFiles(res.data.images.map((item) => {return {view : baseApi + item}}))
    setCommentsLength(res.data.comments)
}

export const getComments = async (location, setComments) => {
    const postId = location.pathname.substring(6)
    const res = await instance.post(getCommentsApi, {postId})
    setComments(res.data.comments)
    /*
    if(res.data.comments.length > 0) {
        setCommentText(res.data.comments[0].text)
    }
    */
}

export const like = async (postId, user) => {
    const data = {
        postId,
        userId : user.id
    }
    await instance.put(postPostLikeApi, data)
}

export const postEditClick = async (setPostEdit, editDesc, location, postDesc, setEditDesc, photoEdit, photoChange, setPhotoChange, files, setPhotoEdit) => {
    setPostEdit(false)
    if(editDesc) {
        const descData = {
            postId : location.pathname.substring(6),
            description : postDesc
        }
        const res = await instance.put(postEditDescApi, descData)
        console.log(res)
        setEditDesc(false)
    }    

    if(photoEdit) {
        if(photoChange) {
            const formData = new FormData()

            for(let i = 0; i < files.length; i += 1) {
                formData.append('files', files[i].file)
            }
            const res = await imageInstance.post(imageApi, formData)
            console.log(res)
            const postData = {
                imgs : res.data.fileNames,
                postId : location.pathname.substring(6)
            }
            const newPost = await instance.put(postEditImgApi, postData)
            console.log(newPost)
            setPhotoChange(false)                
        } else {
            const postData = {
                imgs : files.map((item) => (item.view)),
                postId : location.pathname.substring(6)
            }
            
            const newPost = await instance.put(postEditImgApi, postData)
            console.log(newPost)  
        }
       

        setPhotoEdit(false)
    }
}

export const postDel = async (location, navigate) => {
    await instance.post(postDelApi, {postId : location.pathname.substring(6)})
    navigate(addressPosts)
}

export const pressAddComment = async (key, commentInput, user, location, setComments, setCommentsLength, setCommnetInput, commentsLength) => {
    if(key === stringEnter) {
        const data = {
            text : commentInput,
            author : {
                id : user.id,
                nickName : user.nickName,
                profilePhoto : user.profilePhoto
            },
            date : new Date().toLocaleString(korea),
            postId : location.pathname.substring(6)
        }
        const res = await instance.post(commentAddApi, data)
        console.log(res)
        setComments(res.data.comments)
        setCommentsLength(commentsLength + 1)
        setCommnetInput('')
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
    }
}

export const clickAddComment = async (commentInput, user, location, setComments, setCommentsLength, setCommnetInput, commentsLength) => {
    const data = {
        text : commentInput,
        author : {
            id : user.id,
            nickName : user.nickName,
            profilePhoto : user.profilePhoto
        },
        date : new Date().toLocaleString(korea),
        postId : location.pathname.substring(6)
    }
    const res = await instance.post(commentAddApi, data)
    console.log(res)
    setComments(res.data.comments)
    setCommentsLength(commentsLength + 1)
    setCommnetInput('')
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
}

export const editComment = async (item, commentText, setCommentEdit) => {
    const data = {
        commentId : item._id,
        description : commentText
    }
    const res = await instance.put(commentEditApi, data)
    console.log(res)
    setCommentEdit(false)
}

export const delComment = async (comments, item, setComments, setOpenCommentMenu, setCommentsLength, commentsLength) => {
    const res = comments.filter((i) => item !== i._id)
    setComments(res)
    const del = await instance.post(commentDelApi, {commentId : item})
    console.log(del)
    setOpenCommentMenu(false)
    setCommentsLength(commentsLength - 1)
}

export const textChange = (event, setPostDesc, setEditDesc) => {
    setPostDesc(event.target.value)
    setEditDesc(true)        
}

export const onclick = (setCommentEdit, setOpenCommentMenu) => {
    setCommentEdit(true)
    setOpenCommentMenu(false)
}

export const postDescEditClick = (setPostEdit, setOpenPostMenu) => {
    setPostEdit(true)
    setOpenPostMenu(false)
}

export const clickHeart = (setHeart, heart, postId, user, setHeartLength) => {
    setHeart(!heart)
    like(postId, user)
    heart ? setHeartLength(heart - 1) : setHeartLength(heart + 1)
}