import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'


ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <App />, document.getElementById('root')
    </BrowserRouter>
  </React.StrictMode>,
)