import { setAccessToken, setNickName, setPhoto, setSocialLogin, setUserId } from "../redux/authSlice"

export const logout = (dispatch) => {
    dispatch(setUserId(''))
    dispatch(setNickName(''))
    dispatch(setPhoto(''))
    dispatch(setAccessToken(''))
    dispatch(setSocialLogin(false))
}