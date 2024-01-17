import { setPhoto, setNickName } from "../redux/authSlice"
import { baseApi, imageApi, meApi, meNicknameApi, mePhotoApi } from "../constant/constant"
import imageInstance from "../axios/imageAxios"
import instance from "../axios/defaultAxios"

export const multifileupload = (files, setPostPhoto) => {
    let photo = []
    for(let file of files) {
      let reader = new FileReader()

      reader.onload = (data) => {
        photo.push({
          view : data.target.result,
          file
        })
        setPostPhoto(photo)
      }

      reader.readAsDataURL(file)
    } 
}

export const fileupload = (file, setFile, setUserPhoto) => {
  let reader = new FileReader()
  reader.onload = (data) => {
    setUserPhoto(data.target.result)
  }
  reader.readAsDataURL(file[0])
  setFile(file)
}

export const saveProfile = async (file, user, dispatch, nickname) => {
  if(Object.keys(file).length !== 0) {
    const formData = new FormData()
    formData.append('file', file[0])

    const res = await imageInstance.post(imageApi, formData)
    
    const data = {
      id : user.id,
      profilePhoto : `${baseApi}${res.data.fileName}`
    }
    const profile = await instance.put(mePhotoApi, data)
    console.log(profile)
    dispatch(setPhoto(data.profilePhoto))
  }

  const data = {
    id : user.id,
    nickName : nickname
  }
  const auth = await instance.put(meNicknameApi, data)
  console.log(auth)
  dispatch(setNickName(nickname))
}

export const popupImage = (item, postPhoto, setPostPhoto) => {
  let array = postPhoto.filter((i) => i.view !== item)
  setPostPhoto(array)
}

export const api = async (location, setUserPhoto, setNickname, setId, setPosts) => {
  const res = await instance.post(meApi, {id : location.pathname.substring(6)})
  console.log(res)
  setUserPhoto(res.data.user.profilePhoto)
  setNickname(res.data.user.nickName)
  setId(res.data.user.id)
  setPosts(res.data.posts)
}