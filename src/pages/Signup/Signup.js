import React, {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {url} from '../../constants/urls'
import Logo from '../../img/logo-future-eats-invert_2021-09-06/logo-future-eats-invert.png'
import OlhoAberto from '../../img/senha-2_2021-09-06/senha-2.png'
import OlhoFechado from '../../img/senha-2_2021-09-06/senha.png'
import axios from 'axios'



const Signup = ()=>{
	const olho = useRef(null)
	const senha = useRef(null)
	const olho2 = useRef(null)
	const senha2 = useRef(null)
	const focarSenha = useRef(null)
	const history = useHistory()
	const [form, setForm] = useState({
		nome:'',
		email:'',
		cpf:'',
		senha:'',
		confSenha: ''
	})


	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	const signup = (e)=>{
		e.preventDefault()
		const body = {
			name: form.nome,
			email: form.email,
			cpf: form.cpf,
			password: form.senha
		}

		if(form.senha !== form.confSenha){
			alert('As senhas estão diferentes')
			focarSenha.current.focus()
		}else{
			axios.post(`${url}/signup`, body).then(res=>{
				history.push('/address')
			}).catch(err=>{
				alert('Algo deu errado!\n'+err.response)
			})
		}

	}

	

	const mudarOlho2 = ()=>{
		let zoi = olho2.current
		if(zoi.src === OlhoAberto){
			senha2.current.setAttribute('type', 'password')
			zoi.src = OlhoFechado
		}else{
			senha2.current.setAttribute('type', 'text')
			zoi.src = OlhoAberto			
		}
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
				  Cadastrar
				</span>
			</div>
			<form onSubmit={signup}>
				<span class="Label-Copy">
				  Nome*
				</span>
				<div class="Rectangle">
				<input type='text' autoFocus placeholder='Nome e sobrenome' name='nome'
				value={form.nome} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  E-mail*
				</span>
				<div class="Rectangle">
				<input type='email' placeholder='email@email.com' name='email'
				value={form.email} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  CPF*
				</span>
				<div class="Rectangle">
				<input type='text' placeholder='000.000.000-00' name='cpf'
				value={form.cpf} onChange={mudaForm} required
				onKeyPress={(event)=> event.charCode > 47 && event.charCode < 58} />
				</div>
				<span class="Label-Copy">
				  Senha*
				</span>
				<div class="Rectangle">
				<input type='password' placeholder='Senha'
				name='senha' value={form.senha} onChange={mudaForm}
				ref={senha} required/>
				<img src={`${OlhoFechado}`} ref={olho} class='olho'
				onClick={mudarOlho}/>
				</div>									
				<span class="Label-Copy">
				  Confirmar*
				</span>
				<div class="Rectangle">
				<input type='password' placeholder='Confirme a senha anterior'
				name='confSenha' value={form.confSenha} onChange={mudaForm}
				ref={senha2} required/>
				<img src={`${OlhoFechado}`} ref={olho2} class='olho'
				onClick={mudarOlho2}/>
				</div>
				<div class='btn-Rectangle'>
				<button class="Text-Style-3">
				  Criar
				</button>
				<button class="Text-Style-3" 
				onClick={()=> history.push('/login')} >
				  Voltar para login
				</button>
				</div>
			</form>
		  </div>
}
export default Signup