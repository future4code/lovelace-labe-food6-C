
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
	const [categorias, setCategorias] = useState([])
	const [cardapio, setCardapio] = useState([])
	const [perfil, setPerfil] = useState([])
	const [produto, setProduto] = useState(0)
	const [pedidos, setPedidos] = useState([])
	const [endereco, setEndereco] = useState({})
	const [pagamento, setPagamento] = useState('')
	const [carro, setCarro] = useState([{
		id:'',
		qnt:'',
		pg: ''
	}])
console.log(carro)


	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}

	const mudaPagamento = (e)=>{
		setPagamento(e.target.value)
	}



	const adicionar = (id)=>{
		setIdProduto(id)
		setMostrar(true)

	}

	const irProCarrinho = ()=>{
		history.push('/carrinho')
	}

	
	
	const adicionarAoCarro = (id)=>{
		const itemDoCarro = carro.find((item)=> id === item.id)
		if(itemDoCarro){
			const novoCarro = carro.map(item=>{
				if(id === item.id){
					return{...item, id: id, qnt: Number(item.qnt) + Number(produto),
						pg: pagamento}	
				}
				return item 
			})
			setCarro(novoCarro)
		}else{
			const itemNoCarro = carro.find((item)=> id === item.id)

			const novoCarro = [...carro, {...itemNoCarro, id: id, qnt: Number(produto)+Number(produto),
				pg: pagamento}]
			setCarro(novoCarro)
		}

		setMostrar(false)
		//irProCarrinho()
	}
	


	const listaDeRestaurantes = ()=>{
		axios.get(`${url}/restaurants`, headers).then(res=>{
			setRestaurantes(res.data.restaurants)			
			setCategorias(res.data.restaurants.map((rest)=> {return rest.category}))
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
		idProduto, container, pedidos, endereco, pagamento, categorias}

	const setters = {adicionarAoCarro, mudaProduto, adicionar, mudaPagamento, setCardapio}

	const requests = {listaDeRestaurantes, detalhesRest, pegarPerfil,
		historicoDePedidos, enderecoCadastrado}
	
	


	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState