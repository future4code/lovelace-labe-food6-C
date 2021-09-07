import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RequisicaoDeDados = (url)=>{
	const [dados, setDados] = useState(undefined)

	useEffect(()=>{
		axios.get(url).then(res=>{
			setDados(res.data)
		}).catch(err=>{
			alert('Algo deu errado!\n'+err.response)
		})
	}, [url])

	return dados
}