import MangoInfo from '../pages/MangoInfo/MangoInfo.jsx'
import MainPage from '../pages/MainPage/MainPage.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import { links } from './links.jsx'


export const PublicRoutes = [
    {
        path: links.main,
        element: <MainPage/>
    },
    {
        path: links.mangoInfo,
        element: <MangoInfo/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]