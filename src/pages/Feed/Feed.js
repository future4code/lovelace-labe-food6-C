import React, {useState, useEffect, useContext, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Context from '../../global/Context'
import {Container, Categorias, Categoria,
Restaurantes} from './styled'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import Carrinho from '../../components/Carrinho'


//Componente funcional-----------------------
const Feed = ()=>{
	const card = useRef(null)
	const history = useHistory()
	const {requests, states, setters} = useContext(Context)
	const restaurantes = states.restaurantes
	const [restaurante, setRestaurante] = useState('')
	const [busca, setBusca] = useState([])

	


	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token === null){
			alert('Página inacessível!\nVocê não está logado.')
			history.push('/login')
		}
		requests.listaDeRestaurantes()
	}, [])


	const onChange = (e)=>{
		setRestaurante(e.target.value)
	}
//--------Buscar restaurante-------------------------------

	const buscarRest = (e)=>{
		e.preventDefault()

		const achado = restaurantes
		.filter(rest=> rest.name.toLowerCase() === 
			restaurante.toLowerCase())
		setBusca(achado)
		if(busca.length === 0){
			card.current.style.display = 'block'			
		}else{
			card.current.style.display = 'none'
		}
	}
//--------------Filtro de categoria-------------------------
	const filtrarCategoria = (categoria)=>{
		const filtro = restaurantes.filter((rest)=> rest.category === categoria)
		setBusca(filtro)
		if(busca.length === 0){
			card.current.style.display = 'block'			
		}else{
			card.current.style.display = 'none'
		}
	}

	

//---Início da renderização-----------------------------------
	return<Container ref={states.container}>
			<form onSubmit={buscarRest}>
			<input type='text' placeholder='Restaurante'
			value={restaurante} onChange={onChange}
			autoFocus /><button>Buscar</button>
			</form>
			<Categorias>
			{restaurantes.map(rest=>{
				return <Categoria onClick={()=> filtrarCategoria(rest.category)}>
							{rest.category}
					   </Categoria>
			})}</Categorias>

			
{/*----------Resultado da busca-------------------------------*/}
			{busca.map(item=>{
				return <RestaurantCard
						key={item.id}
						img={item.logoUrl}
						id={item.id}
						nome={item.name}
						entrega={item.deliveryTime}
						frete={item.shipping} />						
			})}

{/*-----------Lista de restaurantes--------------------------------*/}
			<Restaurantes ref={card}>
			{restaurantes.length > 0 ?
			 restaurantes.map(restaurante=>{
				return <RestaurantCard key={restaurante.id}
						img={restaurante.logoUrl}
						nome={restaurante.name}
						id={restaurante.id}
						entrega={restaurante.deliveryTime}
						frete={restaurante.shipping}
					   />
			}) : <div class='loadContainer'>
					<div class='loading'>
					</div>
				 </div>}
				 </Restaurantes>				 
				 <Footer/>				 	
		  </Container>
}
export default Feed