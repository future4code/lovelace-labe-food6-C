import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
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
	margin: 10px;
	img{
		cursor: pointer;
		width: 50px;
	}
`
//Componente funcional
const Footer = ()=>{
	const {setters, requests} = useContext(Context)
	const history = useNavigate()
	
	
	return<Foot>
			 <img src={LogoHome} onClick={()=> history('/feed')}/>
			 <img src={Carrinho} onClick={()=> history('/carrinho')} />
			 <img src={Perfil} onClick={()=> history('/perfil')} />
		  </Foot>
}
export default Footer