import closeIcon from '../../../../assets/images/AuthModal/CloseModal.svg'
import { toggleModal } from '../../../../redux/reducers/AuthSlice.jsx'
import SignInModal from '../SignInModal/SignInModal.jsx'
import SignUpModal from '../SignUpModal/SignUpModal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import classes from './AuthModal.module.sass'
import React from 'react'


export default function AuthModal() {
    const { modal } = useSelector(state => state.AuthSlice)
    const dispatch = useDispatch()

    return (
        <>
            <div
                className={classes.AuthModalWrapper}
                onClick={() => dispatch(toggleModal(''))}>
            </div>
            <div
                className={classes.AuthModal}
                style={modal === 'signIn'
                    ? {height: '478px'}
                    : {height: '761px'}
                }>
                <div className={classes.AuthModal__NavBox}>
                    <div className={classes.AuthModal__NavBox__Links}>
                        <p onClick={() => dispatch(toggleModal('signUp'))}>Вход</p>
                        <p onClick={() => dispatch(toggleModal('signIn'))}>Регистрация</p>
                    </div>
                    <img src={closeIcon} alt="closeIcon" onClick={() => dispatch(toggleModal(''))}/>
                    <div
                        className={classes.AuthModal__NavBox__Selected}
                        style={modal === 'signIn'
                            ? {width: '164px', left: '91px'}
                            : {width: '71px', left: '0px'}
                    }
                    ></div>
                </div>
                <div className={classes.AuthModal__Divider}></div>
                <div className={classes.AuthModal__ModalsBox}>
                    <div
                        className={classes.AuthModal__ModalsBox__inner}
                        style={modal === 'signIn' ? {marginLeft: '-600px'} : {marginLeft: '0px'}
                    }>
                        <SignUpModal/>
                        <SignInModal/>
                    </div>
                </div>
            </div>
        </>
    )
}