import { asyncSignUp, toggleModal } from '../../../../redux/reducers/AuthSlice.jsx'
import Avatar from '../../../../assets/images/AuthModal/Avatar.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import classes from './SignUpModal.module.sass'
import React, { useRef, useState } from 'react'


export default function SignUpModal() {
    const { userData } = useSelector(state => state.AuthSlice)
    const user = JSON.parse(localStorage.getItem('userData'))
    const [ image, setImage ] = useState(null),
        [ userName, setUserName ] = useState(''),
        [ nickName, setNickName ] = useState(''),
        [ password, setPassword ] = useState('')

    const userRegExp = /^.[a-zA-Z0-9]{10,50}$/
    const passwordRegExp = /^.[a-zA-Z0-9]{8,40}$/

    const addImage = useRef()
    const dispatch = useDispatch()

    const addUser = event => {
        event.preventDefault()
        if (userName.trim() !== '' &&
            nickName.trim() !== '' &&
            password.trim() !== '' &&
            userRegExp.test(userName) &&
            userRegExp.test(nickName) &&
            passwordRegExp.test(password) &&
            userName !== nickName &&
            password !== userName &&
            nickName !== password
        ) {
            const userData = {
                image: image,
                userName: userName,
                nickName: nickName,
                password: password
            }

            console.log('userData', userData)
            dispatch(asyncSignUp({ userData }))

            setImage(null)
            setUserName('')
            setNickName('')
            setPassword('')
            dispatch(toggleModal('signIn'))
        }
    }

    const clickImage = event => {
        event.preventDefault()
        addImage.current.click()
    }

    return (
        <div className={classes.SignUp}>
            <div className={classes.SignUp__Avatar}>
                {userData
                    ? <img src={user?.image_file} alt="Avatar"/>
                    : <img src={Avatar} alt="Avatar"/>
                }
            </div>
            <p className={classes.SignUp__Avatar__AddImg} onClick={clickImage}>
                ДОБАВИТЬ ФОТО
            </p>
            <input
                ref={addImage}
                onChange={event => setImage(event.target.files[0])}
                type="file"
                className={classes.SignUp__ImageInput}
            />
            <form onSubmit={addUser} className={classes.SignUp__Form}>
                <input
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    type="text"
                    placeholder={'Username'}
                    maxLength={50}
                    required
                />
                <input
                    value={nickName}
                    onChange={event => setNickName(event.target.value)}
                    type="text"
                    placeholder={'Nickname'}
                    maxLength={60}
                    required
                />
                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="text"
                    placeholder={'Password'}
                    maxLength={40}
                    required
                />
                <button>регистрация</button>
            </form>
        </div>
    )
}