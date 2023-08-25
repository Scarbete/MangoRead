import ScrollToTop from '../components/Base/ScrollToTop/ScrollToTop.jsx'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './routes.jsx'
import React from 'react'


export default function AppRouter() {
    return (
        <div>
            <ScrollToTop/>
            <Routes>
                {PublicRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </div>
    )
}