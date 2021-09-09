import React, {useRef, useContext, useEffect} from 'react'
import styled from 'styled-components'
import Context from '../global/Context'


const Popup = styled.div`
	position: fixed;	
	background-color: whitesmoke;
	box-shadow: 3px 3px 7px black;
	border: 1px solid;
	width: 80vw;
	height: 30vh;
	border-radius: 20px;
	text-align: center;
	padding: 10px;
	div{
		margin: 10px;
	}
	
`
const Rodape = styled.div`
	float: right;
	color: blue;
`


const PopupCart = ()=>{
	const {states, setters} = useContext(Context)
		
	
	return<Popup>
			<div>Informe a quantidade desejada e forma de pagamento.</div>
			<select value={states.produto} onChange={setters.mudaProduto}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
			</select>
			<select value={states.pagamento}
				onChange={setters.mudaPagamento}>
				<option>Débito</option>
				<option>Crédito</option>
				<option>Pix</option>
				<option>Boleto</option>
			</select>
			<Rodape>
			<span onClick={()=> setters.adicionarAoCarro(states.idProduto)}>			
				Adicionar ao carrinho</span>			
			</Rodape>
		  </Popup>
}
export default PopupCart