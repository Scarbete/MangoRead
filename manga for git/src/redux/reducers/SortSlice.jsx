import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    Types: [
        { id: 0, title: 'Манга' },
        { id: 1, title: 'Манхва' },
        { id: 2, title: 'Комиксы' },
        { id: 3, title: 'Маньхуа' },
    ],
    sortTypes: [],
    sortGenres: [],
    slider: false,
    reset: false,
    startYear: '',
    endYear: '',
}


const SortSlice = createSlice({
    name: 'SortSlice',
    initialState,
    reducers: {
        // Функция для смены состояния слайдера между Genre и Types
        setSlider: (state) => {
            state.slider = !state.slider
        },

        // Функции для добавления удаления типов в sortTypes
        addSortTypes: (state, action) => {
            if (!state.sortTypes.includes(action.payload)) {
                state.sortTypes.push(action.payload)
            }
        },
        removeSortTypes: (state, action) => {
            state.sortTypes = state.sortTypes.filter(item => item !== action.payload)
        },

        // Функции для добавления удаления жанров в sortGenres
        addSortGenres: (state, action) => {
            if (!state.sortGenres.includes(action.payload)) {
                state.sortGenres.push(action.payload)
            }
        },
        removeSortGenres: (state, action) => {
            state.sortGenres = state.sortGenres.filter(item => item !== action.payload)
        },

        // Функция сброса сортировки
        resetSorts: (state) => {
            state.sortTypes = []
            state.sortGenres = []
            state.reset = true
        },
        toggleReset: (state) => {
            state.reset = false
        },

        // Функции для сортировки по годам
        setStartYear: (state, action) => {
            state.startYear = action.payload
        },
        setEndYear: (state, action) => {
            state.endYear = action.payload
        }
    }
})


export const {
    setSlider,
    addSortTypes,
    removeSortTypes,
    addSortGenres,
    removeSortGenres,
    resetSorts,
    toggleReset,
    setStartYear,
    setEndYear
} = SortSlice.actions

export default SortSlice.reducer