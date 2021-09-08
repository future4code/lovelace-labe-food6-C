import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {Card, Image, Texto, Tempo, CardPratos,
Picture, Button, Popup, Rodape} from './styled'
import Footer from '../../components/Footer'
import {url, headers} from '../../constants/urls'




//Início do componente
const Cardapio = ()=>{
	const mostrar = useRef(null)
	const container = useRef(null)
	const {states, requests} = useContext(Context)
	const cardapio = states.cardapio
	const pratos = states.cardapio.products
	const [produto, setProduto] = useState([])
	const [pagamento, setPagamento] = useState('')



	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}

	const mudaPagamento = (e)=>{
		setPagamento(e.target.value)
	}
	

	const carrinho = ()=>{
		container.current.style.background = '#4e4e4e'
		mostrar.current.style.marginLeft = '10vw'
	}

	const voltar = ()=>{
		container.current.style.background = 'white'
		mostrar.current.style.display = 'none'
	}

	


//-------------Renderização	================
	return<Card ref={container}>		
			<Image src={cardapio.logoUrl}/>
			<Texto><h4>{cardapio.name}</h4>
			   <p>{cardapio.category}</p>
			   <Tempo>{cardapio.deliveryTime} - {cardapio.deliveryTime + 10} min
			   <div>Frete R$ {cardapio.shipping},00</div></Tempo>
			   <p>{cardapio.address}</p>
			   <div>Principais</div>
			   <hr/>		   
			</Texto>
				{pratos.length > 0 ? pratos.map(prato=>{
					return<CardPratos>
							<Picture src={prato.photoUrl}/>
							<div>
								<h4>{prato.name}</h4>
								<p>{prato.description}</p>
								R$ {prato.price},00
							</div>
							<button onClick={carrinho}>Adicionar</button>
							<Popup ref={mostrar}>
								<div>Informe o método de pagamento a quantidade desejada</div>
								<select value={pagamento} onChange={mudaPagamento}>
									<option>Débito</option>
									<option>Crédito</option>
									<option>Paypal</option>
									<option>Boleto</option>
									<option>Pix</option>
								</select>
								<input type='number' value={produto}
								onChange={mudaProduto} />
								<Rodape>
								<span
								onClick={voltar} >Volar</span>
								<span onClick={()=> requests.adicionarAoCarro(prato.id)} >
								Adicionar ao carrinho</span>
								</Rodape>
							</Popup>							
						  </CardPratos> 
				 }): <div class='loading'></div>}
				 <Footer/>
		   </Card>
}

export default Cardapio

