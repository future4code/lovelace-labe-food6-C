import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {url} from '../../constants/urls'
import Logo from '../../img/logo-future-eats-invert.png'
import OlhoAberto from '../../img/senha-2.png'
import OlhoFechado from '../../img/senha.png'
import axios from 'axios'
import {Titulo, Formulario, Container, Image} from './styled'



const Signup = ()=>{
	const olho = useRef(null)
	const senha = useRef(null)
	const olho2 = useRef(null)
	const senha2 = useRef(null)
	const focarSenha = useRef(null)
	const history = useNavigate()
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
				history('/address')
			}).catch(err=>{
				alert('Algo deu errado!\n'+err.response.data.message)
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
	return<Container>
			<Image src={`${Logo}`}/>
			<Titulo>Cadastrar</Titulo>
			<Formulario onSubmit={signup}>
				<div>
				<input type='text' autoFocus placeholder='Nome e sobrenome' name='nome'
				value={form.nome} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='email' placeholder='email@email.com' name='email'
				value={form.email} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='text' placeholder='000.000.000-00' name='cpf'
				value={form.cpf} onChange={mudaForm} required
				onKeyPress={(event)=> event.charCode > 47 && event.charCode < 58} />
				</div>
				<div className="Rectangle">
				<input type='password' placeholder='Senha'
				name='senha' value={form.senha} onChange={mudaForm}
				ref={senha} required/>
				<img src={`${OlhoFechado}`} ref={olho} className='olho'
				onClick={mudarOlho}/>
				</div>
				<div>
				<input type='password' placeholder='Confirme a senha anterior'
				name='confSenha' value={form.confSenha} onChange={mudaForm}
				ref={senha2} required/>
				<img src={`${OlhoFechado}`} ref={olho2} className='olho2'
				onClick={mudarOlho2}/>
				</div>
				<div>
				<button>Criar</button>
				<button className="Text-Style-3" 
				onClick={()=> history('/login')} >
				  Voltar para login
				</button>
				</div>
			</Formulario>
		  </Container>
}
export default Signup