import styled from 'styled-components'

export const Container = styled.div`
	text-align: center;
`
export const Image = styled.img`
	margin-top: 12vh;
`
export const Formulario = styled.form`
	line-height: 10vh;
	input{
		height: 7vh;
		width: 80vw;
	}
	button{
		width: 82.6vw;
		height: 7vh;
		font-weight: bold;
		background-color: #e8222e;
		border: none;
	}
	img.olho{
		position: absolute;
		top: 72%;
		left: 80%;
		width: 32px;
	}
	img.olho2{
		position: absolute;
		top: 82%;
		left: 80%;
		width: 32px;
	}
`
export const Titulo = styled.div`
	margin-top: 8vh;
	font-size: 1.4rem;
	margin-bottom: 3vh;
`