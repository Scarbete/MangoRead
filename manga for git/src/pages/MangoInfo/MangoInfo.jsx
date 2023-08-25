import { asyncGetComments, asyncGetSoloMango } from '../../redux/reducers/getSingleMango.jsx'
import {setCommentModal, setLogout, toggleModal} from '../../redux/reducers/AuthSlice.jsx'
import CommentModal from '../../components/UI/Modals/CommentModal/CommentModal.jsx'
import AuthModal from '../../components/UI/Modals/AuthModal/AuthModal.jsx'
import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import ArrowBack from '../../assets/images/MangoInfo/ArrowBack.svg'
import {asyncGetGenres} from '../../redux/reducers/getMango.jsx'
import Loading from '../../components/Base/Loading/Loading.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classes from './MangoInfo.module.sass'
import { links } from '../../links/links.jsx'
import React, { useEffect } from 'react'


export default function MangoInfo() {
    const { soloMango, mangoComments, loading } = useSelector(state => state.getSingleMango)
    const { modal, userData, commentModal } = useSelector(state => state.AuthSlice)
    const { genres } = useSelector(state => state.getMango)

    const { id } = useParams(),
        dispatch = useDispatch(),
        navigate = useNavigate()

    const theme = createTheme({
        components: {MuiPaginationItem: {styleOverrides: {root: {
            '&.Mui-selected': {backgroundColor: '#2FE09B', color: 'white',},
            '&:not(.Mui-selected)': {color: '#A5A5A5',},
            '& .MuiPaginationItem-icon': {color: '#A5A5A5',},
            '&.MuiPaginationItem-ellipsis': {color: '#A5A5A5',}
        ,},},},},
    })

    const clickNavigate = () => {
        navigate(links.main)
        dispatch(setLogout(false))
    }

    const clickOpenModal = () => {
        dispatch(setCommentModal())
        dispatch(setLogout(false))
    }

    useEffect(() => {
        dispatch(asyncGetGenres())
    }, [dispatch])

    useEffect(() => {
        dispatch(asyncGetSoloMango({ id }))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(asyncGetComments({ id }))
    }, [dispatch, id])

    if (loading) return <Loading/>

    return (
        <>
            { modal && <AuthModal/>}
            { commentModal && <CommentModal id={id} /> }

            <div className={classes.MangoInfo}>
                <div className={'container'}>
                    <div className={classes.MangoInfo__inner}>
                        <div className={classes.MangoInfo__inner__backArrow} onClick={clickNavigate}>
                            <img src={ArrowBack} alt='ArrowBack'/>
                            <p className={classes.MangoInfo__inner__backArrow__p}>Назад</p>
                        </div>
                        <div className={classes.MangoInfo__inner__Mango}>
                            <div className={classes.MangoInfo__inner__Mango__Avatar}>
                                <img src={soloMango?.image} alt='soloMango'/>
                            </div>
                            <div className={classes.MangoInfo__inner__Mango__Text}>
                                <h2>{soloMango?.ru_name}</h2>
                                <h3>Информация:</h3>
                                <p><span>Тип: </span>{soloMango?.type}</p>
                                <p><span>Год: </span>{soloMango?.issue_year}</p>
                                <div className={classes.MangoInfo__inner__Mango__Text__Genre}>
                                    <span>Жанр:</span>
                                    <p>{genres.filter(item => soloMango?.genre?.includes(item.id))
                                        .map((item, index, arr) => (
                                            <b key={item.id}>
                                                {item.title}
                                                {index === arr.length - 1 ? "." : ", "}
                                            </b>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.MangoInfo__inner__ManfoInfo}>
                            <h3>Синопсис</h3>
                            <p>{soloMango.description}</p>
                        </div>
                        <div className={classes.MangoInfo__inner__Comments}>
                            <div className={classes.MangoInfo__inner__Comments__Nav}>
                                <h3>Топ комментарий</h3>
                                {userData
                                    ? <p onClick={clickOpenModal}>
                                        добавить комментарий
                                    </p>
                                    : <p onClick={() => dispatch(toggleModal('signUp'))}>
                                        добавить комментарий
                                    </p>
                                }
                            </div>
                            {mangoComments?.map(comment =>
                                <div key={comment.id} className={classes.MangoInfo__inner__Comments__Info}>
                                    <div className={classes.MangoInfo__inner__Comments__Info__Avatar}>
                                        <img src={comment?.user?.image_file} alt='image'/>
                                    </div>
                                    <div className={classes.MangoInfo__inner__Comments__Info__TextBox}>
                                        <h3>{comment?.user?.username}, {comment?.user?.nickname}</h3>
                                        <p>{comment.text}</p>
                                    </div>
                                </div>
                            )}
                            <div className={classes.pagination}>
                                <ThemeProvider theme={theme}>
                                    <Pagination
                                        count={10}
                                        size={'large'}
                                    />
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}