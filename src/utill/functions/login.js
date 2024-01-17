import { googleLoginApi, kakaoLoginApi, loginApi, string } from "../constant/constant"
import { setAccessToken, setNickName, setPhoto, setSocialLogin, setUserId } from "../redux/authSlice"
import instance from "../axios/defaultAxios"

export const localLogin = async (id, password, dispatch, setError) => {
    const data = {
        id,
        password
    }
    const res = await instance.post(loginApi, data)
    if(typeof(res.data) !== string) {
        dispatch(setUserId(res.data.auth.id))
        dispatch(setNickName(res.data.auth.nickName))
        dispatch(setPhoto(res.data.auth.profilePhoto))
        dispatch(setAccessToken(res.data.accessToken))        
    }else setError(res.data)
}

export const google = async (googleToken, dispatch) => {
    const res = await instance.post(googleLoginApi, {googleToken})
    dispatch(setUserId(res.data.auth.id))
    dispatch(setNickName(res.data.auth.nickName))
    dispatch(setPhoto(res.data.auth.profilePhoto))
    dispatch(setAccessToken(res.data.accessToken))
    dispatch(setSocialLogin(true))
}

export const kakao = async (code, dispatch) => {
    const res = await instance.post(kakaoLoginApi, {code : code})
    dispatch(setUserId(res.data.auth.id))
    dispatch(setNickName(res.data.auth.nickName))
    dispatch(setPhoto(res.data.auth.profilePhoto))
    dispatch(setAccessToken(res.data.accessToken))
    dispatch(setSocialLogin(true))
}