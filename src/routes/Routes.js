import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Feed from '../pages/Feed/Feed'
import Signup from '../pages/Signup/Signup'
import Address from '../pages/Address/Address'
import Home from '../pages/Home/Home'
import Cardapio from '../pages/Cardapio/Cardapio'
import Perfil from '../pages/Perfil/Perfil'
import Carrinho from '../pages/Carrinho/Carrinho'


const Router = ()=>{
	return<Routes>
			<Route exact path='/' element={<Home/>} />
			<Route exact path='/login' element={<Login/>} />
			<Route exact path='/signup' element={<Signup/>} />
			<Route exact path='/address' element={<Address/>} />
			<Route exact path='/feed' element={<Feed/>} />
			<Route exact path='/cardapio' element={<Cardapio/>} />
			<Route exact path='/perfil' element={<Perfil/>} />
			<Route exact path='/carrinho' element={<Carrinho/>} />
		  </Routes>
}
export default Router