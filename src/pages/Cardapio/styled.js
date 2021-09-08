import styled from 'styled-components'

export const Card = styled.div`
	border: 1px solid red;
	width: 85.5vw;
	margin: 20px;
`
export const Texto = styled.div`
	margin: 15px;
`
export const Tempo = styled.div`
	display: flex;
	justify-content: space-between;
`
export const Image = styled.img`
	width: 310px;
	height: 150px;
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
	div{
		margin: 10px;
	}
	button{
		background-color: #e8222e;
		border-radius: 10px;
		margin-top: 30vh;
	}
`
export const Picture = styled.img`
	width: 80px;
	height: 130px;	
	border-radius: 10px;
`

