
import Context from './Context'
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {url, headers} from '../constants/urls'
import {useHistory} from 'react-router-dom'


const GlobalState = (props) =>{
	const history = useHistory()
	const container = useRef(null)
	const [mostrar, setMostrar] = useState(false)
	const [idProduto, setIdProduto] = useState('')
	const [restaurantes, setRestaurantes] = useState([])
	const [cardapio, setCardapio] = useState([])
	const [perfil, setPerfil] = useState([])
	const [produto, setProduto] = useState('')
	const [carro, setCarro] = useState([{
		id:'',
		qnt:''
	}])
	console.log(carro)

	const adicionar = (id)=>{
		setIdProduto(id)
		setMostrar(true)

	}

	const voltar = ()=>{
		setMostrar(false)
		container.current.style.background='whitesmoke'
	}


	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}


	
	const adicionarAoCarro = (id, quantidade)=>{
		const itemDoCarro = carro.find((item)=> id === item.id)
		if(itemDoCarro){
			const novoCarro = carro.map(item=>{
				if(id === item.id){
					return{...item, id: id, qnt: Number(item.qnt) + Number(quantidade)}	
				}
				return item 
			})
			setCarro(novoCarro)
		}else{
			const itemNoCarro = carro.find((item)=> id === item.id)

			const novoCarro = [...carro, {...itemNoCarro, id: id, qnt: Number(quantidade)+Number(quantidade)}]
			setCarro(novoCarro)
		}
		voltar()
	}
	


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


	
	

	const states = {restaurantes, cardapio, perfil, carro, produto, mostrar,
		idProduto, container}
	const setters = {adicionarAoCarro, mudaProduto, adicionar}
	const requests = {listaDeRestaurantes, detalhesRest,
		pegarPerfil}
	
	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState