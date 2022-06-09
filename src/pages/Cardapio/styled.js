import styled from 'styled-components'



export const Container = styled.div`
	h1{
		text-align: center
	}
`
export const Card = styled.div`
	border: 1px solid red;
	width: 50vw;
	margin: auto;
`
export const Texto = styled.div`
	margin: 15px;
	.principal{
		text-align: center;
		margin-top: 7vh;
	}
`
export const Tempo = styled.div`
	display: flex;
	justify-content: space-between;
`
export const Image = styled.img`
	width: 50vw;
	height: 50vh;
`
export const CardPratos = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid;
	border-radius: 10px;
	margin: 10px;
	// padding: 10px;
	h4{
		color: red;
		margin-bottom: -10px;
	}
	p{
		font-size: 10pt;
	}
	div{
		margin: 10px;
	}
	button{
		position: absolute;
		left: 66%;
		background-color: #e8222e;
		border-radius: 10px;
		cursor: pointer;
	}
`
export const Picture = styled.img`
	width: 100px;
	height: 130px;	
	border-radius: 10px;
`

