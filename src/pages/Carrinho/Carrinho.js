import React, {useContext, useEffect} from 'react'
import Context from '../../global/Context'
import {url, headers} from '../../constants/urls'
import axios from 'axios'
import {Container, Header, SectionOne, SectionTwo,
CardPratos, Picture, Qnt} from './styled'
import Footer from '../../components/Footer'


const Carrinho = ()=>{
	const {states, requests} = useContext(Context)
	const carro = states.carro
	const id = states.idRestaurante
	const pedidos = states.pedidos
	const cardapio = states.cardapio
	const perfil = states.perfil
	const item = states.item


	const idItem = carro.map(car=>{
		return car.id
	})
	const qnt = carro.map(car=>{
		return car.qnt
	})
	const pg = carro.map(car=>{
		return car.pg
	})
	

	useEffect(()=>{
		requests.pegarPerfil()
	}, [])

		
	console.log(carro)
	
	const finalizarCompra = ()=>{
		const body = {
			 	id: idItem,
				quantity: qnt,			
				paymentMethod: pg
			}
		axios.post(`${url}/restaurants/${id}/order`, body, headers).then(res=>{
			console.log(res.data)
		}).catch(err=>{
			alert(err.response.data.message)
		})

	}	

	return <Container>
			<Header>
			<h3>Meu carrinho</h3>
			</Header>
			<hr/>			
			<SectionOne>
				<div><div class='informativo'>Endereço para entrega</div>
					{perfil.address}</div>
			</SectionOne>
			<SectionTwo>
				<div class='restaurante'>{cardapio.name}</div>				
				<div class='endereco'>{cardapio.address}</div>				
			</SectionTwo>
				<hr/>
				<CardPratos>					
					<div class='head-card'>
						<Picture src={item.photoUrl}/>
					</div>												
					<div class='texto'>
						<h4>{item.name}</h4>
						<p>{item.description}</p>
						R$ {item.price}
					</div>																																						
			    </CardPratos>
			    <p style={{textAlign:'center'}}><button onClick={finalizarCompra} >Finalizar compra</button></p>	
				<Footer/>
		  </Container>
}
export default Carrinho
