import React, {useContext, useEffect} from 'react'
import Context from '../../global/Context'
import {url, headers} from '../../constants/urls'
import axios from 'axios'
import {Container, SectionOne, SectionTwo,
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

console.log(item)
console.log(carro)


	const idItem = carro.map(car=>{
		return car.id
	})
	const qnt = carro.map(car=>{
		return car.qnt
	})
	const pg = carro.map(car=>{
		return car.pg
	})


	const total = ()=>{
		let soma = 0
		for(let valor of item){
			soma += valor.price
		}

		return soma
	}

	console.log(total())

	useEffect(()=>{
		requests.pegarPerfil()
	}, [])

		
	
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
			<h3>Meu carrinho</h3>			
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

				{item.length > 0 ? item.map(produto=>{
						return<CardPratos>										
								<div class='head-card'>
									<Picture src={produto.photoUrl}/>
								</div>												
								<div class='texto'>
									<h4>{produto.name}</h4>
									<p>{produto.description}</p>
									R$ {produto.price}
								</div>																																														
						    </CardPratos>
					}) : <div class='loadContainer'>
							<div class='loading'>
							</div>
						 </div>}
						 <h4>SUBTOTAL: R$ {total()}</h4>				
			    <p style={{textAlign:'center'}}><button onClick={finalizarCompra} >Finalizar compra</button></p>	
				<Footer/>
		  </Container>
}
export default Carrinho
