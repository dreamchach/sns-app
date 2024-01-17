import instance from "../axios/defaultAxios"
import imageInstance from "../axios/imageAxios"
import { imagesApi, postIdApi, postPostLikeApi, postsApi } from "../constant/constant"

export const multifileupload = (files, setUploadPhoto) => {
    let photo = []
    for(let file of files) {
      let reader = new FileReader()

      reader.onload = (data) => {
        photo.push({
            view : data.target.result,
            file
        })
        setUploadPhoto(photo)
      }

      reader.readAsDataURL(file)
    } 
}

export const popupImage = (item, uploadPhoto, setUploadPhoto) => {
    let array = uploadPhoto.filter((i) => i.view !== item)
    setUploadPhoto(array)
}

const onclick = async (uploadPhoto, addPostDesc, user, setPosts, address) => {
    if(uploadPhoto.length > 0) {
        const formData = new FormData()
        for(let i = 0; i < uploadPhoto.length; i += 1) {
            formData.append('files', uploadPhoto[i].file)
        }
        
        const res = await imageInstance.post(imagesApi, formData)
        
        const data = {
            description : addPostDesc,
            author : {
                id : user.id,
                nickName : user.nickName,
                profilePhoto : user.profilePhoto
            },
            images : res.data.fileNames,
            date : new Date().toLocaleString('ko-KR')
        }
        const addPost = await instance.post(`${postIdApi}${address}`, data)
        setPosts(addPost.data.posts)
    } else {
        const data = {
            description : addPostDesc,
            author : {
                id : user.id,
                nickName : user.nickName,
                profilePhoto : user.profilePhoto
            },
            date : new Date().toLocaleString('ko-KR')
        }
        const addPost = await instance.post(`${postIdApi}${address}`, data)
        setPosts(addPost.data.posts)
    }
}

export const getPosts = async (setPosts) => {
    const res = await instance.get(postsApi)
    setPosts(res.data.posts)
}

export const like = async (postId, user, posts, setPosts) => {
    const data = {
        postId,
        userId : user.id
    }
    const like = await instance.put(postPostLikeApi, data)

    const newPosts = posts.map((item) => {
        if(item._id === postId) {
            return like.data
        } else return item
    })
    setPosts(newPosts)
}

export const onsave = (setUploadPhoto, setAddPostDesc, setModal, uploadPhoto, addPostDesc, user, setPosts, address) => {
    setUploadPhoto([])
    onclick(uploadPhoto, addPostDesc, user, setPosts, address)
    setAddPostDesc('')
    setModal(false)
}

export const oncancel = (setUploadPhoto, setAddPostDesc, setModal) => {
    setUploadPhoto([])
    setAddPostDesc('')
    setModal(false)        
}