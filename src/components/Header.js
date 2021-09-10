import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const Head = styled.header`
	border 1px solid lightgray;
`


const Header = ()=>{
	const history = useHistory()

	return<Head>
				<ArrowBackIosIcon style={{marginLeft:'-85%',
					padding:'5px'}}
				onClick={()=> history.goBack()} />
			</Head>
}
export default Header