import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const Feed = ()=>{
	const history = useHistory()

	useEffect(()=>{
		const token = localStorage.getItem('token')

		if(token === null){
			alert('Página inacessível!\nVocê não está logado.')
			history.push('/login')
		}
	})

	return<>
			Feed
		  </>
}
export default Feed