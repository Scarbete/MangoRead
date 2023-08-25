import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'


export default function ScrollToTop() {
    const { page } = useSelector(state => state.getMango)

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname, page])

    return null
}