import styled from 'styled-components'

export const Container = styled.div`
	margin: 23px;
	line-height: 6vh;	
	button{
		width: 82.6vw;
		height: 7vh;
		font-weight: bold;
		background-color: #e8222e;
		border: none;
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
	display: flex;
	align-items: center;
	margin: 10px;
	border: 1px solid;
	border-radius: 10px;
	h4{
		color: red;
		margin-bottom: -10px;
	}
	p{
		color: gray;
		font-size: 10pt;
	}
	.texto{
		margin: 10px;
	}
	button{
		background-color: #e8222e;
		border-radius: 10px;
		margin-top: 30vh;
		width: 100px;
		font-weight: light;
		margin-left: 30vw;
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
