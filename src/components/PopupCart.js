import React, {useContext} from 'react'
import styled from 'styled-components'
import Context from '../global/Context'




const Popup = styled.div`
	display: none;
	position: fixed;
	background-color: #151515;
	box-shadow: 3px 3px 7px black;
	border: 1px solid;
	width: 38vw;
	height: 15vh;
	border-radius: 20px;
	text-align: center;
	padding: 10px;
	color: whitesmoke;
	div{
		margin: 10px;
	}
		
`
const SessaoPedido = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	div{
		cursor: pointer;
	}
`


const PopupCart = ()=>{
	const {states, setters} = useContext(Context)
		

//============Inicio da renderização===============	
	return(
		<Popup ref={setters.popup}>
			<div>Informe a quantidade desejada e forma de pagamento.</div>
			<SessaoPedido>
				<select value={states.produto} onChange={setters.mudaProduto}
				style={{borderRadius:'10px', borderColor:'blue'}}>
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
				<div onClick={setters.retiraPopup}>Cancela</div>						
				<div onClick={()=> setters.adicionarAoCarro(states.idProduto)}>			
					Adicionar ao carrinho</div>
			</SessaoPedido>			
		  </Popup>
	)
}
export default PopupCart