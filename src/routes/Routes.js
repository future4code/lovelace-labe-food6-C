import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GlobalState from '../global/GlobalState'
import Login from '../pages/Login/Login'
import Feed from '../pages/Feed/Feed'
import Signup from '../pages/Signup/Signup'
import Address from '../pages/Address/Address'
import Home from '../pages/Home/Home'
import Cardapio from '../pages/Cardapio/Cardapio'
import Perfil from '../pages/Perfil/Perfil'


const Routes = ()=>{
	return<Switch>
			<GlobalState>
				<Route exact path='/'>
					<Home/>
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/signup'>
					<Signup/>
				</Route>
				<Route exact path='/address'>
					<Address/>
				</Route>
				<Route exact path='/feed'>
					<Feed />
				</Route>
				<Route exact path='/cardapio'>
					<Cardapio/>
				</Route>
				<Route exact path='/perfil'>
					<Perfil/>
				</Route>				
			</GlobalState>
		  </Switch>
}
export default Routes