import { setAccessToken, setNickName, setPhoto, setUserId } from "../redux/authSlice"
import { baseApi, imageApi, signupApi, string } from "../constant/constant"
import imageInstance from "../axios/imageAxios"
import instance from "../axios/defaultAxios"

export const onclick = async (file, id, password, nickname, dispatch, setError) => {
    const formData = new FormData()
    formData.append('file', file[0])

    const res = await imageInstance.post(imageApi, formData)
    console.log(res.data.fileName)
    const data = {
      id,
      password,
      nickName : nickname,
      profilePhoto : `${baseApi}${res.data.fileName}`
    }
    const sign = await instance.post(signupApi, data)
    if(typeof(sign.data) !== string) {
      dispatch(setUserId(sign.data.auth.id))
      dispatch(setNickName(sign.data.auth.nickName))
      dispatch(setPhoto(sign.data.auth.profilePhoto))
      dispatch(setAccessToken(sign.data.accessToken))      
    }else setError(sign.data)
}

export const fileupload = async (file, setFile, setPhotoFile) => {
    let reader = new FileReader()
    reader.onload = (data) => {
      setPhotoFile(data.target.result)
    }
    reader.readAsDataURL(file[0])
    setFile(file)
}