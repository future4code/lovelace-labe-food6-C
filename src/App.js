import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/Routes'
import GlobalStyle from './GlobalStyle'
import Header_temp from './Header_temp'


function App() {
  return<BrowserRouter>
          <Header_temp/>
          <GlobalStyle/>
          <Routes/>          
        </BrowserRouter>
}

export default App;
