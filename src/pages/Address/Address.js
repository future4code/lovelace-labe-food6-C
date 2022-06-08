import React, {useState, useContext, useEffect} from 'react'
import Context from '../../global/Context'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {url, headers} from '../../constants/urls'
import {Titulo, Formulario, Container, Image,
Botao} from './styled'
import Header from '../../components/Header'



//---------Início do componente---------------------
const Address = ()=>{
	const {states, requests} = useContext(Context)
	const [mostrar, setMostrar] = useState(false)
	const history = useNavigate()
	const endereco = states.endereco
	const [form, setForm] = useState({
		street: '',
	    number: '',
	    neighbourhood: '',
	    city: '',
	    state: '',
	    complement: ''
	})
	
console.log(endereco)
	const mudaForm = (e)=>{
		const {name, value} = e.target
		setForm({...form, [name]: value})
	}

	const cadastrarEndereco = (e)=>{
		e.preventDefault()		
		const body = {
		    street: form.street,
		    number: form.number,
		    neighbourhood: form.neighbourhood,
		    city: form.city,
		    state: form.state,
		    complement: form.complement
		}
		axios.put(`${url}/address`, body, headers).then(res=>{
			localStorage.setItem('token', res.data.token)
			alert('Endereço cadastrado.')
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response.data.message)
		})
	}
	

	
//Início da renderização
	return<Container>
			<Header/>			
			<Titulo>Meu endereço</Titulo>
			<Formulario onSubmit={cadastrarEndereco}>
				<div>
				<input type='text' autoFocus placeholder='Rua / Av.'
				 name='street' value={form.street} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='number' placeholder='Número' name='number'
				value={form.number} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='text' placeholder='Bairro' name='neighbourhood'
				value={form.neighbourhood} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='text' placeholder='Cidade' name='city'
				value={form.city} onChange={mudaForm}required/>
				</div>
				<div className="Rectangle">
				<input type='text' placeholder='Estado'
				name='state' value={form.state} onChange={mudaForm} required/>
				</div>
				<div className="Rectangle">
				<input type='text' placeholder='Complemento' name='complement'
				value={form.complement} onChange={mudaForm}/>
				</div>
				<div className='btn-Rectangle'>
				<button class="Text-Style-3">
				  Cadastrar
				</button>				
				</div>
			</Formulario>
		</Container>
}
export default Address