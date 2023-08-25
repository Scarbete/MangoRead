import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $mainApi } from '../../common/axios.jsx'


export const asyncGetSoloMango = createAsyncThunk(
    'getSingleMango/asyncGetSoloMango', async ({ id }) => {
        try {
            const { data } = await $mainApi.get(`v1/manga/${id}`)
            return await data
        }
        catch (error){console.error(error)}
    }
)


export const asyncGetComments = createAsyncThunk(
    'getSingleMango/asyncGetComments', async ({ id }) => {
        try {
            const { data } = await $mainApi.get(`v1/manga/${id}/comments/`)
            return await data
        }
        catch (error){console.error(error)}
    }
)


const getSingleMango = createSlice({
    name: 'getSingleMango',
    initialState: {
        loading: false,
        soloMango: [],
        mangoComments: []
    },
    reducers: {

    },
    extraReducers: ( builder ) => {
        builder.addCase(asyncGetSoloMango.pending, (state) => {
            state.loading = true
        })
        builder.addCase(asyncGetSoloMango.fulfilled, (state, action) => {
            state.soloMango = action.payload
            state.loading = false
        })
        builder.addCase(asyncGetComments.fulfilled, (state, action) => {
            state.mangoComments = action.payload
        })
    }
})

export const {} = getSingleMango.actions
export default getSingleMango.reducer