import { resetSorts, toggleReset } from '../../../../redux/reducers/SortSlice.jsx'
import TypesFilter from '../TypesFilter/TypesFilter.jsx'
import GenreFilter from '../GenreFilter/GenreFilter.jsx'
import { useDispatch, useSelector } from 'react-redux'
import classes from './MainFilter.module.sass'
import React from 'react'


export default function MainFilter() {
    const { genres } = useSelector(state => state.getMango)
    const { slider } = useSelector(state => state.SortSlice)
    const dispatch = useDispatch()

    const clickReset = () => {
        dispatch(resetSorts())
        setTimeout(() => {
            dispatch(toggleReset())
        }, 10)
    }

    return (
        <div className={classes.Filter}>
            <div
                className={classes.Filter__Slider}
                style={slider
                    ? {marginLeft: '-500px'}
                    : {marginLeft: '0px'}
                }
            >
                <TypesFilter/>
                <GenreFilter genres={genres}/>
            </div>
            <div className={classes.Filter__Buttons}>
                <button
                    className={classes.Filter__Buttons__Reset}
                    onClick={clickReset}
                >
                    Сбросить
                </button>
                <button className={classes.Filter__Buttons__Use}>
                    Применить
                </button>
            </div>
        </div>
    )
}