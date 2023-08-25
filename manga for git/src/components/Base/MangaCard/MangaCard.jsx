import { setLogout } from '../../../redux/reducers/AuthSlice.jsx'
import { useNavigate } from 'react-router-dom'
import classes from './MangaCard.module.sass'
import { useDispatch } from 'react-redux'
import React from 'react'


export default function MangaCard ({ mango }) {
    const navigate = useNavigate(), dispatch = useDispatch()

    const clickNavigate = () => {
        navigate(`/mangoInfo/${mango.id}`)
        dispatch(setLogout(false))
    }

    return (
        <div className={classes.MangoCard} onClick={clickNavigate}>
            <img
                src={mango?.image}
                alt='MangoImage'
            />
            <div className={classes.MangoCard__text}>
                <p>Год: {mango?.issue_year}</p>
                <h5>{mango?.ru_name}</h5>
            </div>
        </div>
    )
}