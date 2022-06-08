import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../img/logo-future-eats.png'



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

const Home = ()=>{
	const history = useNavigate()

	
	return<Container>
			<div className='legenda' onClick={()=> 
			history('/login')}>Clique para logar
			</div>
			<Image className='image' src={`${Logo}`}			
			onClick={()=> history('/login')}/>
		  </Container>
}
export default Home