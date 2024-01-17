import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        id : '',
        nickName : '',
        profilePhoto : '',
        accessToken : '',
        socialLogin : false
    },
    reducers : {
        setUserId : (state, action) => {
            state.id = action.payload
        },
        setNickName : (state, action) => {
            state.nickName = action.payload
        },
        setPhoto : (state, action) => {
            state.profilePhoto = action.payload
        },
        setAccessToken : (state, action) => {
            state.accessToken = action.payload
        },
        setSocialLogin : (state, action) => {
            state.socialLogin = action.payload
        }
    }
})

export const {setUserId, setNickName, setPhoto, setAccessToken, setSocialLogin} = authSlice.actions
export default authSlice.reducer