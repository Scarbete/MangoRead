import GenresCheckBox from '../../../Base/CheckBox/GenresCheckBox.jsx'
import backArrow from '../../../../assets/images/MainPage/backArrow.svg'
import { setSlider } from '../../../../redux/reducers/SortSlice.jsx'
import classes from './GenreFilter.module.sass'
import { useDispatch } from 'react-redux'
import React from 'react'


export default function GenreFilter ({ genres }) {
    const dispatch = useDispatch()

    return (
        <div className={classes.GenreFilter}>
            <div>
                <div className={classes.GenreFilter__Handler} onClick={() => dispatch(setSlider())}>
                    <img
                        src={backArrow}
                        alt='backArrow'
                    />
                    <p>Назад</p>
                </div>
                <div className={classes.GenreFilter__GenresList}>
                    <h3>Жанры </h3>
                    {genres.map(item =>
                        <GenresCheckBox item={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    )
}