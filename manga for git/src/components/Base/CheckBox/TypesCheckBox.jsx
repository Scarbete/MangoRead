import { addSortTypes, removeSortTypes } from '../../../redux/reducers/SortSlice.jsx'
import notChecked from '../../../assets/images/MainPage/notCheck.svg'
import Checked from '../../../assets/images/MainPage/checked.svg'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import classes from './TypesCheckBox.module.sass'


export default function TypesCheckBox({ item }) {
    const { reset } = useSelector(state => state.SortSlice)
    const [ check, setCheck ] = useState(false)
    const dispatch = useDispatch()
    const title = item.title

    const handleCheck = () => setCheck((check) => !check)

    useEffect(() => {
        check
            ? dispatch(addSortTypes(title))
            : dispatch(removeSortTypes(title))
        reset && setCheck(false)
    }, [check, reset])

    return (
        <div className={classes.CheckBox} onClick={handleCheck}>
            {check
                ? <img src={Checked} alt='Checked'/>
                : <img src={notChecked} alt='notChecked'/>
            }
            <p>{item.title}</p>
        </div>
    )
}