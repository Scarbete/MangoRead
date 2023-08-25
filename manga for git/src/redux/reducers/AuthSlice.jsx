import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authApi, $mainApi } from '../../common/axios.jsx'
import Decode from 'jwt-decode'

// ЗАПРОС ДЛЯ ВЫХОДА ИЗ АККАУНТА
export const asyncLogout = createAsyncThunk(
    'AuthSlice/asyncLogout', async ({ refresh }) => {
        try {
            const { data } = await $authApi.post(`auth/logout/`, refresh)
            console.log(data)
        }
        catch (error){console.error(error)}
    }
)

// ЗАПРОС ДЛЯ СОЗДАНИЯ АККАУНТА ДЛЯ ПОЛЬЗОВАТЕЛЯ
export const asyncSignUp = createAsyncThunk(
    'AuthSlice/asyncSignUp', async ({ userData }) => {
        try {
            console.log(userData)
            const form = new FormData
            form.append('username', userData.userName)
            form.append('nickname', userData.nickName)
            form.append('image_file', userData.image)
            form.append('password', userData.password)

            const response = await $mainApi.post(`auth/signup/`, form)
            console.log(response)
        }
        catch (error){console.error(error)}
    }
)

// ЗАПРОС ДЛЯ ВХОДА В АККАУНТ И ПОЛУЧЕНИЕ ПРОФИЛЯ
export const asyncSignIn = createAsyncThunk(
    'AuthSlice/asyncSignIn', async ({ userName, password }) => {
        try {
            const form = new FormData
            form.append('username', userName)
            form.append('password', password)

            const { data } = await $mainApi.post(`auth/signin/`, form)
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)

            const user = Decode(localStorage.getItem('access'))
            localStorage.setItem('user_id', user?.user_id)

            const response = await $mainApi.get(`auth/profile/${user?.user_id}/`)
            localStorage.setItem('userData', JSON.stringify(response.data))
        }
        catch (error){console.error(error)}
    }
)

// ЗАПРОС ДЛЯ ДОБАВЛЕНИЯ КОМЕНТАРИЕВ
export const asyncPostComment = createAsyncThunk(
    'AuthSlice/asyncPostComment', async ({ id, text }) => {
        try {
            const form = new FormData
            form.append('text', text)
            const response = $authApi.post(`/v1/manga/${id}/add-comment/`, form)
            console.log(response)
        }
        catch (error){console.error(error)}
    }
)


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        modal: '',
        access: localStorage.getItem('access')
            ? localStorage.getItem('access')
            : '',
        refresh: localStorage.getItem('refresh')
            ? localStorage.getItem('refresh')
            : '',
        userData: localStorage.getItem('userData')
            ? JSON.parse(localStorage.getItem('userData'))
            : '',
        commentModal: false,
        logoutButton: false
    },
    reducers: {
        toggleModal: (state, action) => {
            state.modal = action.payload
        },
        setCommentModal: (state) => {
            state.commentModal = !state.commentModal
        },
        setLogout: (state, action) => {
            state.logoutButton = action.payload
        },
        toggleLogout: (state) => {
            state.logoutButton = !state.logoutButton
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncSignIn.fulfilled, () => {
            window.location.reload()
        })
        builder.addCase(asyncLogout.fulfilled, () => {
            window.location.reload()
        })
    }
})

export const { toggleModal, setCommentModal, setLogout, toggleLogout } = AuthSlice.actions
export default AuthSlice.reducer