import React, {useContext, useEffect, useRef, useState} from 'react'
import Context from '../../global/Context'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {url, headers} from '../../constants/urls'


const Container = styled.div`
	margin: 10px;
`



//----------Componente funcional--------------------
const Perfil = ()=>{
	const history = useHistory()
	const {states, requests} = useContext(Context)
	const perfil = states.perfil
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
	return<Container>
			{perfil.name}
			<p>{perfil.email}</p>
			{perfil.cpf}
			<p>{perfil.address}</p>
			<button onClick={edite} >Editar</button>
			<button onClick={()=> history.push('/address')}>
			Editar endereço</button>
			<div ref={editar} style={{display:'none'}}>
			<form
			onSubmit={atualizarPerfil}>
				<hr/>
				<input type='text' autoFocus placeholder='Nome e sobrenome' 
				name='nome' value={form.nome} onChange={mudaForm} required/>
				<input type='email' placeholder='email@email.com'
				name='email' value={form.email} onChange={mudaForm} required/>
				<input type='text' placeholder='000.000.000-00'
				name='cpf' value={form.cpf} onChange={mudaForm} required/>				
				<button>Atualizar</button>				
			</form>
			<button onClick={ocultar} >Ocultar</button>
			</div>
			<p>Histórico de pedidos<hr/></p>
			{states.pedidos.length === 0 ? <h4>Nenhum pedido.</h4>
				: <h1>Precisa ter algo aqui</h1>}
		  </Container>

}
export default Perfil

