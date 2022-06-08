import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const Head = styled.header`
	border 1px solid lightgray;
`


const Header = ()=>{
	const history = useNavigate()

	return<Head>
				{/* <ArrowBackIosIcon style={{marginLeft:'-85%',
					padding:'5px'}}
				onClick={()=> history(-1)} /> */}
			</Head>
}
export default Header