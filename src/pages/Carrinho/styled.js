import styled from 'styled-components'

export const Container = styled.div`
	margin: 23px;
	line-height: 6vh;	
	button{
		width: 88vw;
		height: 7vh;
		font-weight: bold;
		background-color: #e8222e;
		border: none;
	}
	.pagar{
		float: left;
	}
`

export const SectionOne = styled.div`
	background-color: whitesmoke;
	.informativo{
		color: lightgray;
	}
`
export const SectionTwo = styled.div`
	margin-top: 10px;
	.restaurante{
		color: red;
		font-size: 15pt;
	}
	.endereco{
		color: lightgray;
	}
`
export const CardPratos = styled.div`
	position: relative;
	margin: 10px;
	border: 1px solid;
	border-radius: 10px;
	box-sizing: content-box;
	.sessao{
		position: absolute;
		left: 30%;
		bottom: 10%;
	}
	.nome{
		color: red;
	}
	.preco{
		font-weight: bold;
		margin-top: 20px;
	}	
`
export const Qnt = styled.span`
	position: absolute;
	margin-left: 74vw;
	border-radius: 5px;
	text-align: center;
	border: 1px solid;
	height: 25px;
	width: 25px;
` 
export const Picture = styled.img`
	width: 80px;
	height: 130px;	
	border-radius: 10px;
`
export const Total = styled.div`
	margin-left: 12px;
`
export const Pagamento = styled.div`
	margin-bottom: 30px;
	label{
		float: left;
	}
	input{
		float: left;
	}
`


