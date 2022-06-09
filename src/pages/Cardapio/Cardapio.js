import React, {useContext} from 'react'
import Context from '../../global/Context'
import {Card, Image, Texto, Tempo, CardPratos,
Picture, Container} from './styled'
import Footer from '../../components/Footer'
import PopupCart from '../../components/PopupCart'



//Início do componente
const Cardapio = ()=>{	
	const {states, setters} = useContext(Context)
	const cardapio = states.cardapio
	const pratos = cardapio.products
console.log(states.mostrar)

	


//-------------Renderização	================
	return<Container>
			<h1>{cardapio.name}</h1>		
		<Card ref={states.container}>
			<Image src={cardapio.logoUrl}/>
			   <PopupCart/>
			<Texto>
			   <p>{cardapio.category}</p>
			   <Tempo>{cardapio.deliveryTime} - {cardapio.deliveryTime + 10} min
			   <div>Frete R$ {cardapio.shipping},00</div></Tempo>
			   <p>{cardapio.address}</p>
			   <div className='principal'>Cardápio Principal</div>
			   <hr/>
			</Texto>
				{pratos.map(prato=>{
					return<CardPratos key={prato.id}>
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
	</Container>
}

export default Cardapio

