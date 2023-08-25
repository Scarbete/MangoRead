import { asyncGetMango, asyncGetGenres, setPage } from '../../redux/reducers/getMango.jsx'
import MainFilter from '../../components/UI/Filters/MainFilter/MainFilter.jsx'
import AuthModal from '../../components/UI/Modals/AuthModal/AuthModal.jsx'
import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import MangaCard from '../../components/Base/MangaCard/MangaCard.jsx'
import Loading from '../../components/Base/Loading/Loading.jsx'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import classes from './MainPage.module.sass'


export default function MainPage() {
    const { mangas, loading, page } = useSelector(state => state.getMango)
    const { modal } = useSelector(state => state.AuthSlice)
    const dispatch = useDispatch()

    const [ limit, setLimit ] = useState(12),
        [ offset, setOffset ] = useState(0)

    const allPages = mangas.count && limit ? Math.ceil(parseInt(mangas.count) / parseInt(limit)) : 1

    const handeChangePage = (event, newPage) => {
        dispatch(setPage(newPage))
        const newOffset = (newPage - 1) * limit
        setOffset(newOffset)
    }

    const theme = createTheme({
        components: {MuiPaginationItem: {styleOverrides: {root: {
            '&.Mui-selected': {backgroundColor: '#2FE09B', color: 'white',},
            '&:not(.Mui-selected)': {color: '#A5A5A5',},
            '& .MuiPaginationItem-icon': {color: '#A5A5A5',},
            '&.MuiPaginationItem-ellipsis': {color: '#A5A5A5',}
        ,},},},},
    })

    useEffect(() => {
        dispatch(asyncGetGenres())
    }, [dispatch])

    useEffect(() => {
        dispatch(asyncGetMango({ limit, offset }))
    }, [dispatch, page])

    if (loading) return <Loading/>

    return (
        <>
            { modal && <AuthModal/>}

            <div className={classes.MainPage}>
                <div className={'container'}>
                    <div className={classes.MainPage__inner}>
                        <div className={classes.MainPage__inner__Content}>
                            <MainFilter/>
                            <div className={classes.MainPage__inner__Content__CardBox}>
                                {mangas?.results?.map(mango =>
                                    <MangaCard key={mango.id} mango={mango}/>
                                )}
                            </div>
                        </div>
                        <div className={classes.MainPage__inner__Pagination}>
                            <ThemeProvider theme={theme}>
                                <Pagination
                                    count={allPages}
                                    size={'large'}
                                    page={page}
                                    onChange={handeChangePage}
                                />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}