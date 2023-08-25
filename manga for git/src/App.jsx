import Header from './components/UI/Header/MainHeader/Header.jsx'
import Footer from './components/UI/Footer/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './links/AppRouter.jsx'


export default function App() {

    return (
        <div className={'wrapper'}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}