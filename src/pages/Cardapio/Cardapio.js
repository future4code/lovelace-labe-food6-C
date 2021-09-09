import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {Card, Image, Texto, Tempo, CardPratos,
Picture, Button} from './styled'
import Footer from '../../components/Footer'
import PopupCart from '../../components/PopupCart'
import Carrinho from '../../components/Carrinho'



import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {url, headers} from '../../constants/urls'




//Início do componente
const Cardapio = ()=>{	
	const {states, setters, requests} = useContext(Context)
	const cardapio = states.cardapio
	const pratos = cardapio.products




/*===============temporário para testes-=============================


const detalhesRest = (id)=>{
		axios.get(`${url}/restaurants/${id}`, headers).then((res)=>{
					setters.setCardapio(res.data.restaurant)
				}).catch(err=>{
					console.log(err.response)
				})
	}

useEffect(()=>{
	detalhesRest(1)
}, [])


//===============temp-=============================	*/	

//-------------Renderização	================
	return<Card ref={states.container}>		
			<Image src={cardapio.logoUrl}/>
			{states.mostrar ? <PopupCart/> : null}
			   {states.mostrar ? states.container.current.style.background='#4e4e4e': null}			   
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
							<span></span>							
							<div>
								<h4>{prato.name}</h4>
								<p>{prato.description}</p>
								R$ {prato.price},00
							</div>
							<button onClick={()=> setters.adicionar(prato.id)}>
								Adicionar
							</button>																												
						  </CardPratos> 
				 }): <div class='loading'></div>}			 				 			 
				 <Footer/>
		   </Card>
}

export default Cardapio

