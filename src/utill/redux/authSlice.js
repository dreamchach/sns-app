import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        id : '',
        nickName : '',
        profilePhoto : '',
        accessToken : ''
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
        }
    }
})

export const {setUserId, setNickName, setPhoto, setAccessToken} = authSlice.actions
export default authSlice.reducer