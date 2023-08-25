import loadIcon from '../../../assets/images/Loader/react.svg'
import classes from './Loading.module.sass'
import React from 'react'


export default function Loading() {
    return (
        <div className={classes.Loading}>
            <img src={loadIcon} alt="loadIcon"/>
        </div>
    )
}