import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/Routes'
import GlobalStyle from './GlobalStyle'


function App() {
  return<BrowserRouter>
          <GlobalStyle/>
          <Routes/>          
        </BrowserRouter>
}

export default App;
