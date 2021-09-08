import React, {useState, useRef} from 'react'
import styled from 'styled-components'





const PopupCart = (props)=>{
	const [produto, setProduto] = useState([])
	const [pagamento, setPagamento] = useState('')


	const mudaProduto = (e)=>{
		setProduto(e.target.value)
	}

	const mudaPagamento = (e)=>{
		setPagamento(e.target.value)
	}


	return<Popup>
			<div>Informe o método de pagamento a quantidade desejada</div>
			<select value={pagamento} onChange={mudaPagamento}>
				<option>Débito</option>
				<option>Crédito</option>
				<option>Paypal</option>
				<option>Boleto</option>
				<option>Pix</option>
			</select>
			<input type='number' value={produto}
			onChange={mudaProduto} />
			<p onClick={()=> props.adiciona(props.id)} >
			Adicionar ao carrinho</p>
		</Popup>
}
export default PopupCart