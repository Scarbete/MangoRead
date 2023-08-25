import { asyncLogout, toggleLogout } from '../../../../redux/reducers/AuthSlice.jsx'
import logoutArrow from '../../../../assets/images/Header/logoutArrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import classes from './ProfileSection.module.sass'
import React from 'react'


export default function ProfileSection() {
    const { userData, logoutButton } = useSelector(state => state.AuthSlice)
    const dispatch = useDispatch()

    const refresh = localStorage.getItem('refresh')

    const clickLogout = () => {
        dispatch(asyncLogout({ refresh }))
        dispatch(toggleLogout())
        localStorage.clear()
    }

    return (
        <div className={classes.Profile}>
            <div className={classes.Profile}>
                <h3>{userData?.username}</h3>
                <div className={classes.Profile__Logo}>
                    <img src={userData?.image_file} alt='image_file'/>
                </div>
                <div
                    className={classes.Profile__Logout}
                    onClick={() => dispatch(toggleLogout())}>
                    <img
                        src={logoutArrow} alt='logoutArrow'
                        style={logoutButton
                            ? {transform: `rotate(180deg)`}
                            : {transform: `rotate(0deg)`}
                        }
                    />
                </div>
            </div>
            {logoutButton &&
                <button
                    onClick={clickLogout}
                    className={classes.Profile__LogoutActive}>
                    Logout
                </button>
            }
        </div>
    )
}