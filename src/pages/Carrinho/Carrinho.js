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
			    <p style={{textAlign:'center'}}><button onClick={finalizarCompra} >Finalizar compra</button></p>	
				<Footer/>
		  </Container>
}
export default Carrinho
