import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {url, headers} from '../../constants/urls'
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Container, Header, SectionOne, SectionTwo, BtnHide,
BtnForm, Pedidos} from './styled'
// import EditIcon from '@material-ui/icons/Edit';
import Footer from '../../components/Footer'




//----------Componente funcional--------------------
const Perfil = ()=>{
	const history = useNavigate()
	const {states, setters, requests} = useContext(Context)
	const pedidos = states.pedidos
	const perfil = states.perfil
	const [pedido, setPedido] = useState([]) 
	const editar = useRef(null)
	const [form, setForm] = useState({
		nome:'',
		email:'',
		cpf:''
	})
	


	useEffect(()=>{
		requests.pegarPerfil()
		requests.historicoDePedidos()
	}, [])
	

	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}


	const atualizarPerfil = (e)=>{
		e.preventDefault()
		const body = {
			name: form.nome,
			email: form.email,
			cpf: form.cpf
		}

		axios.put(`${url}/profile`, body, headers).then(res=>{
			console.log(res.data)
			requests.pegarPerfil()			
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}

	
	const edite = ()=>{
		editar.current.style.display = 'block'
	}
	const ocultar = ()=>{
		editar.current.style.display = 'none'
	}


//---------------Renderização---------------------
	const dataDoPedido = pedidos.map(pedido=>{
		return pedido.createdAt
	})
	const expiracao = pedidos.map(pedido=>{
		return pedido.expiresAt
	})

	let data = new Date(dataDoPedido)
	console.log(data.toLocaleDateString())
	

	return<Container>
			<Header>
			<h3>Meu perfil</h3>
			{/* <PersonOutlineIcon style={{fontSize:'2.5rem',
			color:'lightgray'}} onClick={setters.logout} /> */}
			</Header>
			<hr/>
			<SectionOne>
				<p>{perfil.name}<br/>
				{perfil.email}<br/>
				{perfil.cpf}</p>
				{/* <EditIcon onClick={edite}/> */}
			</SectionOne>
			<SectionTwo>				
				<span>
				<div style={{color:'lightgray'}}>Endereço cadastrado</div>
				{perfil.address}</span>
				{/* <EditIcon onClick={()=> history('/address')}/> */}
			</SectionTwo>			
			<div ref={editar} style={{display:'none'}}>
			<hr/><BtnHide onClick={ocultar} >Ocultar</BtnHide>
			<form onSubmit={atualizarPerfil}>
				<input type='text' autoFocus placeholder='Nome e sobrenome' 
				name='nome' value={form.nome} onChange={mudaForm} required/>
				<input type='email' placeholder='email@email.com'
				name='email' value={form.email} onChange={mudaForm} required/>
				<input type='text' placeholder='000.000.000-00'
				name='cpf' value={form.cpf} onChange={mudaForm} required/>				
				<br/><BtnForm>Atualizar</BtnForm>				
			</form>			
			</div>
			<p>Histórico de pedidos<hr/></p>
			{pedidos.length > 0 ? pedidos.map(pedido=>{
				return<Pedidos>
						<div className='titulo'>
							{pedido.restaurantName}
						</div>
						<p>Data: {dataDoPedido}<br/>
							Expiração: {expiracao}</p>
						<div className='total'>
						SUBTOTAL: R$ {pedido.totalPrice}
						</div>
					  </Pedidos>
			}) : <div className='loadContainer'>
					<div className='loading'></div>
					</div>}
				<Footer/>
		  </Container>

}
export default Perfil

