import { setLogout } from '../../../../redux/reducers/AuthSlice.jsx'
import { setSearch } from '../../../../redux/reducers/getMango.jsx'
import Search from '../../../../assets/images/Header/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './SearchBar.module.sass'
import React, { useState } from 'react'


export default function SearchBar () {
    const { search, searchArr } = useSelector(state => state.getMango)
    const [ focus, setFocus ] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFocus = () => {
        setFocus(false)
        dispatch(setLogout(false))
    }
    const handleBlur = () => setFocus(true)

    const clickMango = id => {
        navigate(`/mangoInfo/${id}`)
        dispatch(setSearch(''))
    }

    return (
        <div className={classes.SearchBox}>
            <div className={classes.SearchBox__Search}>
                {focus && <img src={Search} alt='Search'/>}
                <input
                    value={search}
                    onChange={event => dispatch(setSearch(event.target.value))}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    type='text'
                    placeholder={'Поиск по названию'}
                    style={focus ? {paddingLeft: '50px'} : {paddingLeft: '16px'}}
                />
            </div>
            {search
                ? <div className={classes.SearchBox__SearchArr}>
                    {searchArr.length > 0
                        ? <>
                            {searchArr.map(mango =>
                                <div key={mango.id}>
                                    <p onClick={() => clickMango(mango.id)}>
                                        {mango?.ru_name}
                                    </p>
                                </div>
                            )}
                        </>
                        : <>Не найдено!</>
                    }
                </div>
                : <div></div>
            }
        </div>
    )
}