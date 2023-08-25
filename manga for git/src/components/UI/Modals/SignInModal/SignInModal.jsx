import classes from './SignInModal.module.sass'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import {asyncSignIn, toggleModal} from "../../../../redux/reducers/AuthSlice.jsx";


export default function SignInModal() {
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const dispatch = useDispatch()

    const SignIn = event => {
        event.preventDefault()
        if (userName.trim() !== '' && password.trim() !== '') {
            console.log(userName)
            console.log(password)
            dispatch(asyncSignIn({ userName, password }))
            setUserName('')
            setPassword('')
            dispatch(toggleModal(''))
        }
    }

    return (
        <div className={classes.SignIn}>
            <form onSubmit={SignIn} className={classes.SignIn__Form}>
                <input
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    type="text"
                    placeholder={'Username'}
                    required
                />
                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="text"
                    placeholder={'Password'}
                    required
                />
                <div className={classes.SignIn__Form__CheckBox}>
                    <input
                        type="checkbox"
                    />
                    <p>Запомнить меня</p>
                </div>
                <button>Вход</button>
            </form>
        </div>
    )
}