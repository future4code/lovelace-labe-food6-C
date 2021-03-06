import Context from './Context'
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {url, headers} from '../constants/urls'
import {useNavigate} from 'react-router-dom'


const GlobalState = (props) =>{
	const history = useNavigate()
	const popup = useRef(null)
	const [mostrar, setMostrar] = useState(false)
	const [idRestaurante, setIdRestaurante] = useState('')
	const [idProduto, setIdProduto] = useState('')
	const [restaurantes, setRestaurantes] = useState([])
	const [categorias, setCategorias] = useState([])
	const [cardapio, setCardapio] = useState([])
	const [perfil, setPerfil] = useState([])
	const [produto, setProduto] = useState(0)
	const [pedidos, setPedidos] = useState([])
	const [endereco, setEndereco] = useState({})
	const [carro, setCarro] = useState([])
	const [sacola, setSacola] = useState([])



	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}



	const adicionar = (prato)=>{		
		setIdProduto(prato.id)
		popup.current.style.display = 'block'
	}

	// const adicionarAoCarro = (prato)=>{
	// 	const novaSacola = [...sacola, prato]
	// 	setSacola(novaSacola)
	// }


	const retiraPopup = ()=>{
		popup.current.style.display = 'none'
	}


	const logout = ()=>{
		const decide = window.confirm('Tem certeza que quer sair da sua conta?')
		if(decide){
			const token = localStorage.removeItem('token')
			history('/')
		}
	}
	
	
	const adicionarAoCarro = (id)=>{
		const itemDoCarro = carro.find((item)=> id === item.id)
		if(itemDoCarro){
			const novoCarro = carro.map(item=>{
				if(id === item.id){
					return{...item, id: id, qnt: Number(item.qnt) + Number(produto)}	
				}
				return item 
			})
			setCarro(novoCarro)
		}else{
			const itemNoCarro = carro.find((item)=> id === item.id)
			const novoCarro = [...carro, {...itemNoCarro, id: id, qnt: Number(produto)}]
			setCarro(novoCarro)
		}

		setMostrar(false)
		history('/carrinho')
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
					setCategorias(res.data.restaurant.products.map(cat=>{
						return cat.category
					}))								
					setIdRestaurante(id)
					history('/cardapio')
				}).catch(err=>{
					console.log(err.response)
				})
	}


	const pegarPerfil =()=>{
		axios.get(`${url}/profile`, headers).then(res=>{
			setPerfil(res.data.user)
		}).catch(err=>{
			alert('Algo deu errado')
		})
	}

	const historicoDePedidos = ()=>{
		axios.get(`${url}/orders/history`, headers).then(res=>{
			setPedidos(res.data.orders)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}


	const enderecoCadastrado = ()=>{
		axios(`${url}/profile/address`, headers).then(res=>{
			setEndereco(res.data.address)
		}).catch(err=>{
			alert('Algo deu errado.\n'+err.response.data.message)
		})
	}

	

	

	const states = {restaurantes, cardapio, perfil, carro, produto, mostrar,
		pedidos, endereco, categorias, idRestaurante, idProduto,
		sacola}

	const setters = {adicionarAoCarro, mudaProduto, adicionar,
		setMostrar, logout, popup, retiraPopup}

	const requests = {listaDeRestaurantes, detalhesRest, pegarPerfil,
		historicoDePedidos, enderecoCadastrado}
	
	


	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState