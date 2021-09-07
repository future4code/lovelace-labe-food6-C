
import Context from './Context'
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {url, headers} from '../constants/urls'


const GlobalState = (props) =>{
	const [restaurantes, setRestaurantes] = useState([])
	
	


	const listaDeRestaurantes = ()=>{
		axios.get(`${url}/restaurants`, headers).then(res=>{
			console.log(res.data.restaurants)
			setRestaurantes(res.data.restaurants)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response)
		})
	}

	
	

	const states = {restaurantes}
	const setters = {}
	const requests = {listaDeRestaurantes}
	
	return<Context.Provider value={{states, setters, requests}}>
		  	{props.children}
		  </Context.Provider>
}
export default GlobalState