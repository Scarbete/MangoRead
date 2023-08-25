import { setLogout, toggleModal } from '../../../../redux/reducers/AuthSlice.jsx'
import { asyncSearchMango } from '../../../../redux/reducers/getMango.jsx'
import ProfileSection from '../ProfileSection/ProfileSection.jsx'
import Logo from '../../../../assets/images/Header/Logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { links } from '../../../../links/links.jsx'
import { useNavigate } from 'react-router-dom'
import classes from './Header.module.sass'
import React, { useEffect } from 'react'


export default function Header() {
    const { userData } = useSelector(state => state.AuthSlice)
    const { search } = useSelector(state => state.getMango)
    const navigate = useNavigate(), dispatch = useDispatch()

    const clickNavigate = () => {
        dispatch(setLogout(false))
        navigate(links.main)
    }

    useEffect(() => {
        dispatch(asyncSearchMango({ search }))
    }, [dispatch, search])

    return (
        <div className={classes.Header}>
            <div className={'container'}>
                <div className={classes.Header__inner}>
                    <div className={classes.Header__inner__Logo} onClick={clickNavigate}>
                        <img src={Logo} alt='Logo'/>
                        <div className={classes.Header__inner__Logo__texts}>
                            <h3>MangoRead</h3>
                            <p>Читай мангу с нами</p>
                        </div>
                    </div>
                    <SearchBar/>
                    { userData ? (
                        <ProfileSection/>
                    ) : (
                        <div className={classes.Header__inner__Buttons}>
                            <button onClick={() => dispatch(toggleModal('signUp'))}>
                                Войти
                            </button>
                            <button onClick={() => dispatch(toggleModal('signIn'))}>
                                регистрация
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}