import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.input`
	float: right;
`

const Header_temp = ()=>{
	const history = useHistory()

	const logout = ()=>{
		localStorage.removeItem('token')
		history.push('/login')
	}

	return<Button type='button' value='Logout'
			onClick={logout}/>
}
export default Header_temp