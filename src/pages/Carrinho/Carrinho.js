import React, {useContext, useEffect, useState} from 'react'
import Context from '../../global/Context'
import {url, headers} from '../../constants/urls'
import axios from 'axios'
import {Container, SectionOne, SectionTwo,
CardPratos, Picture, Total, Pagamento} from './styled'
import Footer from '../../components/Footer'


const Carrinho = ()=>{
	const {states, requests} = useContext(Context)
	const sacola = states.sacola
	const id = states.idRestaurante
	const pedidos = states.pedidos
	const cardapio = states.cardapio
	const perfil = states.perfil
	const [valor, setValor] = useState([{
			value: 'money'
		}])
	
	

	const mudaValor = (e)=>{
		setValor(e.target.value)
	}


console.log(valor)
	const quantos = (id)=>{
		for(let item of states.carro){
		if(item.id === id){
			return item.qnt 
		}
	  }	
	} 	

	const total = ()=>{
		let soma = 0
		for(let valor of sacola){
			soma += valor.price * states.produto
		}

		return soma
	}


	useEffect(()=>{
		requests.pegarPerfil()
	}, [])

	
	const finalizarCompra = ()=>{
		const body = [{
					 	id: states.idProduto,
						quantity: quantos(),			
						paymentMethod: valor
					}]
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
			{sacola.length > 0 ? sacola.map(item=>{
				return<CardPratos>
						<Picture src={item.photoUrl}/>
						<div class='sessao'>
							<div class='nome'>{item.name}</div>
							<small>{item.description}</small>
							<br/>Quantidade: {quantos(item.id)}
							<div class='preco'>R$ {item.price},00</div>							
						</div>
					  </CardPratos>
			}) : <h3 style={{textAlign:'center'}} >Seu carrinho está vazio</h3>}
			<Total>SUBTOTAL R$ {total()}</Total>
			<div style={{textAlign:'center'}}>
			<div style={{textAlign:'left',
			marginLeft:'12px'}}>Forma de pagamento</div><hr/>
			<Pagamento>
			<input type='radio' id='pague' value='money'
			onChange={mudaValor} checked={valor.value === 'money'} />
			<label for='pague'>Dinheiro</label><br/>				
			<input type='radio' id='pago' value='creditcard'
			onChange={mudaValor} checked={valor.value === 'creditcard'} />
			<label for='pago'>Cartão de crédito</label>
			</Pagamento>
			<button onClick={finalizarCompra}>Finalizar compra</button></div>			
			<Footer/>
		  </Container>
}
export default Carrinho
