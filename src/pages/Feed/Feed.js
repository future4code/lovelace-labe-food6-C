import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Context from '../../global/Context'
import styled from 'styled-components'


const Card = styled.div`
	border: 1px solid;
	width: 29.3vw;
	margin: 20px;
`
const Image = styled.img`
	width: 300px;
	height: 150px;
`
const Nome = styled.div`
	
`
const Tempo = styled.div`
	display: flex;
	justify-content: space-between;
`
const Texto = styled.div`
	margin: 15px;
`




const Feed = ()=>{
	const history = useHistory()
	const {requests, states} = useContext(Context)
	const restaurantes = states.restaurantes

	useEffect(()=>{
		const token = localStorage.getItem('token')

		if(token === null){
			alert('Página inacessível!\nVocê não está logado.')
			history.push('/login')
		}

		requests.listaDeRestaurantes()

	}, [])

	return<>
			{restaurantes.length > 0 ? restaurantes.map(restaurante=>{
				return <Card key={restaurante.id}>
						<Image src={restaurante.logoUrl}/>
						<Texto><Nome>{restaurante.name}</Nome>
						   <Tempo>{restaurante.deliveryTime} - {restaurante.deliveryTime + 10} min
						   <div>Frete R$ {restaurante.shipping},00</div></Tempo>
						</Texto>
					   </Card>
			}) : <div class='loadContainer'>
					<div class='carregando'></div>
				 </div>}
			
		  </>
}
export default Feed