import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {Card, Image, Texto, Tempo, CardPratos,
Picture, Button} from './styled'
import Footer from '../../components/Footer'
import PopupCart from '../../components/PopupCart'
import Carrinho from '../Carrinho/Carrinho'



//Início do componente
const Cardapio = ()=>{	
	const {states, setters, requests} = useContext(Context)
	const cardapio = states.cardapio
	const pratos = cardapio.products
	const categorias = states.categorias

	

//-------------Renderização	================
	return<Card ref={states.container}>		
			<Image src={cardapio.logoUrl}/>
			   {states.mostrar ? <PopupCart /> : null}
			   {states.mostrar ? states.container.current.style.background='#4e4e4e':
			    states.container.current.style.background = 'whitesmoke'}			   
			<Texto><h4>{cardapio.name}</h4>
			   <p>{cardapio.category}</p>
			   <Tempo>{cardapio.deliveryTime} - {cardapio.deliveryTime + 10} min
			   <div>Frete R$ {cardapio.shipping},00</div></Tempo>
			   <p>{cardapio.address}</p>
			   <div>Principais</div>
			   <hr/>
			</Texto>
				{pratos.map(prato=>{
					return<CardPratos>
							<Picture src={prato.photoUrl}/>							
							<div>
								<h4>{prato.name}</h4>
								<p>{prato.description}</p>
								R$ {prato.price},00
							</div>
							<button onClick={()=> setters.adicionar(prato)}>
								Adicionar
							</button>																												
						  </CardPratos> 
				 })}			 				 			 
				 <Footer/>			
				
		   </Card>
}

export default Cardapio

