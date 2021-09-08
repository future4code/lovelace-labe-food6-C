
import Context from './Context'
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {url, headers} from '../constants/urls'
import {useHistory} from 'react-router-dom'


const GlobalState = (props) =>{
	const history = useHistory()
	const [restaurantes, setRestaurantes] = useState([])
	const [cardapio, setCardapio] = useState([])
	const [perfil, setPerfil] = useState([])
	console.log(cardapio)
	


	const listaDeRestaurantes = ()=>{
		axios.get(`${url}/restaurants`, headers).then(res=>{
			setRestaurantes(res.data.restaurants)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response)
		})
	}

	
	const detalhesRest = (id)=>{
		axios.get(`${url}/restaurants/${id}`, headers).then((res)=>{
					setCardapio(res.data.restaurant)
					history.push('/cardapio')
				}).catch(err=>{
					console.log(err.response)
				})
	}


	const pegarPerfil =()=>{
		axios.get(`${url}/profile`, headers).then(res=>{
			setPerfil(res.data.user)
			history.push('/perfil')
		}).catch(err=>{
			alert('Algo deu errado')
		})
	}


	const adicionarAoCarro = (id)=>{
		console.log(id)
	}	

	

	const states = {restaurantes, cardapio, perfil}
	const setters = {}
	const requests = {listaDeRestaurantes, detalhesRest,
		pegarPerfil, adicionarAoCarro}
	
	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState