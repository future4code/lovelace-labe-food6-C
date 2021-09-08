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
const Footer = (props)=>{
	const {states, requests} = useContext(Context)
	const history = useHistory()
	return<Foot>
			 <img src={LogoHome} onClick={()=> history.push('/')}/>
			 <img src={Carrinho} />
			 <img src={Perfil} onClick={requests.pegarPerfil} />
		  </Foot>
}
export default Footer