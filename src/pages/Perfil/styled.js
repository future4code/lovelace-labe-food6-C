import styled from 'styled-components'

export const Container = styled.div`
	margin: 23px;
	line-height: 6vh;
	input{
		height: 5vh;
		margin-bottom: 5px;
	}
`
export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
` 
export const SectionOne = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	p{
		line-height: 6vh;
	}
`
export const SectionTwo = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: whitesmoke;
`
export const BtnHide = styled.button`
	position: absolute;
	left: 80%;
	background-color: #e8222e;
	border-radius: 10px;
`
export const BtnForm = styled.button`	
	background-color: #e8222e;
	border-radius: 10px;
`
export const Pedidos = styled.div`
	border: 1px solid;
	border-radius: 10px;
	padding: 10px;
	.titulo{
		color: red;
	}
	p{
		font-size: 9pt;
	}
	.total{
		font-weight: bolder;
		font-size: 14pt;
	}
`