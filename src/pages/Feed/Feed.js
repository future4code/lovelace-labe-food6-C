import React, {useState, useEffect, useContext, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import Context from '../../global/Context'
import {Container, Categorias, Categoria,
Restaurantes, SearchInput, Search, LogoPicture} from './styled'
import RestaurantCard from '../../components/RestaurantCard'
import SearchIcon from '../../img/search.png'
import Carrinho from '../../img/shopping-cart.png'
import Avatar from '../../img/avatar.png'
import Logo from '../../img/logo-future-eats-invert.png'


//Componente funcional-----------------------
const Feed = ()=>{
	const card = useRef(null)
	const history = useNavigate()
	const {requests, states, setters} = useContext(Context)
	const restaurantes = states.restaurantes
	const [restaurante, setRestaurante] = useState('')
	const [busca, setBusca] = useState([])
	


	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token === null){
			alert('Página inacessível!\nVocê não está logado.')
			history('/login')
		}
		requests.listaDeRestaurantes()
	}, [])


	const onChange = (e)=>{
		setRestaurante(e.target.value)
	}
//--------Buscar restaurante-------------------------------
	const achado = restaurantes.filter(rest=>{
		return rest.name.toLowerCase().includes(restaurante.toLowerCase())
	})
	
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
			<LogoPicture>
				<img src={Logo}/>
			</LogoPicture>
				<Search src={`${SearchIcon}`}/>
				<SearchInput type='text' placeholder='Restaurante'
				value={restaurante} onChange={onChange} className='search'
				autoFocus />
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
			 achado.map(restaurante=>{
				return <RestaurantCard key={restaurante.id}
						img={restaurante.logoUrl}
						nome={restaurante.name}
						id={restaurante.id}
						entrega={restaurante.deliveryTime}
						frete={restaurante.shipping}
					   />
			}) : <div className='loadContainer'>
					<div className='loading'>
					</div>
				 </div>}
				 </Restaurantes>				 				 	
		  </Container>
}
export default Feed