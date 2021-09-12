import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import LogoHome from '../img/homepage.png'
import Carrinho from '../img/shopping-cart.png'
import Perfil from '../img/avatar.png'
import styled from 'styled-components'
import Context from '../global/Context'


//Estilização
const Foot = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 30px;
`
//Componente funcional
const Footer = ()=>{
	const {setters, requests} = useContext(Context)
	const history = useHistory()
	return<Foot>
			 <img src={LogoHome} onClick={()=> history.push('/feed')}/>
			 <img src={Carrinho} onClick={()=> history.push('/carrinho')} />
			 <img src={Perfil} onClick={()=> history.push('/perfil')} />
		  </Foot>
}
export default Footer