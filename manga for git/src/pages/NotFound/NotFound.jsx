import Logo from '../../assets/images/Footer/FooterLogo.svg'
import classes from './NotFound.module.sass'
import {useNavigate} from 'react-router-dom'
import {links} from '../../links/links.jsx'
import React from 'react'



export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className={classes.NotFound}>
            <div className={classes.NotFound__TextBox}>
                <h1>404</h1>
                <p>Страница не найдена!</p>
                <div className={classes.NotFound__TextBox__Logo} onClick={() => navigate(links.main)}>
                    <img src={Logo} alt='MangoReadLogo'/>
                    <h3>Перейти на главную страницу</h3>
                </div>
            </div>
        </div>
    )
}