import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $mainApi } from '../../common/axios.jsx'


export const asyncSearchMango = createAsyncThunk(
    'getMango/asyncSearchMango', async ({ search }) => {
        try {
            const { data } = await $mainApi.get(`v1/manga/?search=${search}`)
            return await data
        }
        catch (error){console.error(error)}
    }
)


export const asyncGetGenres = createAsyncThunk(
    'getMango/asyncGetGenres', async () => {
        try {
            const { data } = await $mainApi.get(`v1/genre/`)
            console.log(data)
            return await data
        }
        catch (error){console.error(error)}
    }
)


export const asyncGetMango = createAsyncThunk(
    'getMango/getAllMangas', async ({ limit, offset }) => {
        try {
            const { data } = await $mainApi.get(`v1/manga/?limit=${limit}&offset=${offset}`)
            console.log(data)
            return await data
        }
        catch (error){console.error(error)}
    }
)


const getMango = createSlice({
    name: 'getMango',
    initialState: {
        mangas: [],
        loading: false,
        genres: [],
        searchArr: [],
        search: '',
        page: 1
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase(asyncGetMango.pending, (state) => {
            state.loading = true
        })
        builder.addCase(asyncGetMango.fulfilled, (state, action) => {
            state.mangas = action.payload
            state.loading = false
        })
        builder.addCase(asyncGetGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        builder.addCase(asyncSearchMango.fulfilled, (state, action) => {
            state.searchArr = action.payload
        })
    }
})

export const {setSearch, setPage} = getMango.actions
export default getMango.reducer