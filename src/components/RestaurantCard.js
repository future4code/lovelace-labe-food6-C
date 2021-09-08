import React, {useContext} from 'react'
import styled from 'styled-components'
import Context from '../global/Context'


const Card = styled.div`
	border: 1px solid red;
	width: 83vw;
	margin: 20px;
`
const Texto = styled.div`
	margin: 15px;
`
const Tempo = styled.div`
	display: flex;
	justify-content: space-between;
`
const Image = styled.img`
	width: 310px;
	height: 150px;
`

const RestaurantCard = (props)=>{
	const {requests} = useContext(Context)

	return<Card>
			<Image src={props.img}
			onClick={()=> requests.detalhesRest(props.id)} />
			<Texto><>{props.nome}</>
			   <Tempo>{props.entrega} - {props.entrega + 10} min
			   <div>Frete R$ {props.frete},00</div></Tempo>
			</Texto>
		   </Card>
}
export default RestaurantCard