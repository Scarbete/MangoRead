import {asyncPostComment, setCommentModal, toggleModal} from '../../../../redux/reducers/AuthSlice.jsx'
import classes from './CommentModal.module.sass'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'


export default function CommentModal ({ id }) {
    const user = JSON.parse(localStorage.getItem('userData'))
    const [ text, setText ] = useState('')
    const dispatch = useDispatch()

    const addComment = event => {
        event.preventDefault()
        if (text.trim() !== '') {
            console.log(text)
            dispatch(asyncPostComment({ id, text }))
            setText('')
            dispatch(setCommentModal())
        }
    }

    return (
        <>
            <div className={classes.CommentModalWrapper} onClick={() => dispatch(setCommentModal())}></div>
            <div className={classes.CommentModal}>
                <div className={classes.CommentModal__UserData}>
                    <div className={classes.CommentModal__UserData__Avatar}>
                        <img src={user?.image_file} alt='image_file'/>
                    </div>
                    <span>{user?.username}, {user?.nickname}</span>
                </div>
                <form onSubmit={addComment} className={classes.CommentModal__Form}>
                    <input
                        value={text}
                        onChange={event => setText(event.target.value)}
                        type='text'
                        placeholder={'Добавьте комментарий'}
                        required
                    />
                    <button>Добавить</button>
                </form>
            </div>
        </>
    )
}