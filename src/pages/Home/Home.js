import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../img/logo-future-eats_2021-09-06/logo-future-eats.png'



const Container = styled.div`
	background-color: #e8222e;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;	
`
const Image = styled.img`
	position: absolute;
	cursor: pointer;	
`
const Legenda = styled.div`
	position: absolute;
	margin-top: -30vh;
	color: whitesmoke;
	font-weight: bolder;
	background-color: red;
	padding: 30px;
	border-radius: 10px;
	opacity: 0;	
`


const Home = ()=>{
	const mostrar = useRef(null)
	const history = useHistory()

	
	const mostrarLegenda = ()=>{
		mostrar.current.style.opacity = '1'
	}
	const someLegenda = ()=>{
		mostrar.current.style.opacity = '0'
		mostrar.current.style.transition = '1.5s'
	}

	return<Container>
			<Legenda ref={mostrar}
			onClick={()=> history.push('/login')}>Clique para logar</Legenda>
			<Image src={`${Logo}`}
			onMouseOver={mostrarLegenda}
			onMouseOut={someLegenda}
			onClick={()=> history.push('/login')}/>
		  </Container>
}
export default Home