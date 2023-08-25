import store from './redux/store/store.jsx'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/css/core.sass'
import App from './App.jsx'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
