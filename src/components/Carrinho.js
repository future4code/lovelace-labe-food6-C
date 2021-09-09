import React, {useContext, useEffect} from 'react'
import Context from '../global/Context'
import {url, headers} from '../constants/urls'
import axios from 'axios'


const Carrinho = ()=>{
	const {states, requests} = useContext(Context)
	const carro = states.carro
	console.log(carro)

	const finalizarCompra = ()=>{
		const body = {
			"products": [{
				"id": "CnKdjU6CyKakQDGHzNln",
				"quantity": 10
			}, {
				"quantity": 1,
				"id": "KJqMl2DxeShkSBevKVre"
			}],
			"paymentMethod": "creditcard"
		}
		axios.post(`${url}/restaurants/10/order`, body, headers).then(res=>{
			console.log(res.data)
		}).catch(err=>{
			console.log(err.response.data.message)
		})

	}

	

	return <div>
		   </div>
}
export default Carrinho