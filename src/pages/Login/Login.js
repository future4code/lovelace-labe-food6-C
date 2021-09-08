import React, {useState, useEffect, useRef} from 'react'
import {url} from '../../constants/urls'
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'
import Logo from '../../img/logo-future-eats-invert.png'
import OlhoAberto from '../../img/senha-2.png'
import OlhoFechado from '../../img/senha.png'



const Login = ()=>{
	const history = useHistory()
	const olho = useRef(null)
	const senha = useRef(null)
	const [form, setForm] = useState({email:'', senha:''})


	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token !== null){
			history.push('/feed')
		}
	})

	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	const login = (e)=>{
		e.preventDefault()
		const body={
			email: form.email,
			password: form.senha
		}

		axios.post(`${url}/login`, body).then(res=>{
			localStorage.setItem('token', res.data.token)
			history.push('/feed')
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}

	const mudarOlho = ()=>{
		let zoi = olho.current
		if(zoi.src === OlhoAberto){
			senha.current.setAttribute('type', 'password')
			zoi.src = OlhoFechado
		}else{
			senha.current.setAttribute('type', 'text')
			zoi.src = OlhoAberto			
		}
	}

//Início da renderização
	return<div class='Login'>

			<img src={`${Logo}`} class="Logo_FutureEats_invert"/>

			<div class="Title">
				<span class="Text">
				  Entrar
				</span>
			</div>
			<form onSubmit={login}>
				<span class="Label-Copy">
				  E-mail*
				</span>
				<div class="Rectangle">
				<input type='email' autoFocus placeholder='email@email.com' name='email'
				value={form.email} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  Senha*
				</span>
				<div class="Rectangle">
				<input type='password' placeholder='Mínimo 6 caracteres' name='senha'
				value={form.senha} onChange={mudaForm} ref={senha} required/>
				<img src={`${OlhoFechado}`} ref={olho}
				onClick={mudarOlho} class='olho'/>
				</div>
				<div class='btn-Rectangle'>
				<button class="Text-Style-3">
				  Entrar
				</button>
				</div>
				Não possui cadastro? clique <Link to={'/signup'}> aqui</Link>
			</form>
		  </div> 
}
export default Login


