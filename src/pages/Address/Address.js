import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {url, headers} from '../../constants/urls'

const Address = ()=>{
	const history = useHistory()
	const [form, setForm] = useState({
		street: '',
	    number: '',
	    neighbourhood: '',
	    city: '',
	    state: '',
	    complement: ''
	})

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
			alert('Algo deu errado!\n'+err.response)
		})
	}
	
//Início da renderização
	return<>
			<div class="Title">
				<span class="Text">
				  Meu endereço
				</span>
			</div>
			<form onSubmit={cadastrarEndereco}>			
				<span class="Label-Copy">
				  Logradouro*
				</span>
				<div class="Rectangle">
				<input type='text' autoFocus placeholder='Rua / Av.'
				 name='street' value={form.street} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  Número*
				</span>
				<div class="Rectangle">
				<input type='number' placeholder='Número' name='number'
				value={form.number} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  Bairro*
				</span>
				<div class="Rectangle">
				<input type='text' placeholder='Bairro' name='neighbourhood'
				value={form.neighbourhood} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  Cidade*
				</span>
				<div class="Rectangle">
				<input type='text' placeholder='Cidade' name='city'
				value={form.city} onChange={mudaForm}required/>
				</div>					
				<span class="Label-Copy">
				  Estado*
				</span>
				<div class="Rectangle">
				<input type='text' placeholder='Estado'
				name='state' value={form.state} onChange={mudaForm} required/>
				</div>
				<span class="Label-Copy">
				  Complemento
				</span>
				<div class="Rectangle">
				<input type='text' placeholder='Complemento' name='complement'
				value={form.complement} onChange={mudaForm}/>
				</div>
				<div class='btn-Rectangle'>
				<button class="Text-Style-3">
				  Cadastrar
				</button>
				</div>
			</form>
		  </>
}
export default Address