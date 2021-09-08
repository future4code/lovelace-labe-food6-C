import React, {useState, useRef, useContext} from 'react'
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


const PopupCart = (props)=>{
	const {states, setters} = useContext(Context)
	const pratos = states.cardapio.products
	


	return<Popup>
			<div>Informe a quantidade desejada</div>								
			<input type='number' value={states.produto}
			min='0' max='10' onChange={setters.mudaProduto} />
			<Rodape>
			<span onClick={()=> setters.adicionarAoCarro(props.id, states.produto)} >
				Adicionar ao carrinho</span>
			</Rodape>
		  </Popup>
}
export default PopupCart