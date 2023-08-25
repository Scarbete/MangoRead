import { setEndYear, setSlider, setStartYear } from '../../../../redux/reducers/SortSlice.jsx'
import TypesCheckBox from '../../../Base/CheckBox/TypesCheckBox.jsx'
import typesArrow from '../../../../assets/images/MainPage/typesArrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import classes from './TypesFilter.module.sass'


export default function TypesFilter() {
    const { Types, startYear, endYear, reset } = useSelector(state => state.SortSlice)
    const dispatch = useDispatch()

    const changeStartYear = event => {
        dispatch(setStartYear(event.target.value.replace(/\D/, '')))
    }
    const changeEndYear = event => {
        dispatch(setEndYear(event.target.value.replace(/\D/, '')))
    }

    if (reset) {
        dispatch(dispatch(setStartYear('')))
        dispatch(dispatch(setEndYear('')))
    }

    return (
        <div className={classes.Types}>
            <div>
                <div className={classes.Types__Handler} onClick={() => dispatch(setSlider())}>
                    <h3>Жанры</h3>
                    <button className={classes.Types__Handler__Button}>
                        все
                        <img src={typesArrow} alt='typesArrow'/>
                    </button>
                </div>
                <div className={classes.Types__List}>
                    <h4>Тип</h4>
                    {Types.map(item =>
                        <TypesCheckBox
                            key={item.title}
                            item={item}
                        />
                    )}
                </div>
                <div className={classes.Types__YearSort}>
                    <input
                        value={startYear}
                        onChange={changeStartYear}
                        type='text'
                        placeholder={'От 0'}
                        maxLength={4}
                    />
                    <div className={classes.Types__YearSort__Divider}></div>
                    <input
                        value={endYear}
                        onChange={changeEndYear}
                        type='text'
                        placeholder={'До 2022'}
                        maxLength={4}
                    />
                </div>
            </div>
        </div>
    )
}