import React from 'react'
import {Pane, Text, Card} from 'evergreen-ui'
import Moment from 'react-moment'

const Comments =(props)=> {

	return(
		<Pane
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'
		marginRight={20}
		marginLeft={20}>

		<Card
		width='100%'
		maxWidth={700}
		minWidth={350}
		backgroundColor='#F3F6FF'
		marginBottom={20}
		padding={20}
		borderColor='#3366FF'
		border='default'
		borderRadius='none'>

		<Pane
		id='comments'
		display='flex'
		flexDirection='column'
		textAlign='left'>
		<Text
		color='#101840'>
		Posted on: &nbsp; 
		<Moment format="MM/DD/YYYY">{props.date_of_comment}</Moment>
		</Text>

		<Text
		style={{'whiteSpace':'pre-wrap'}}
		color='#101840'>
		{props.comment}
		</Text>
		</Pane>

		</Card>
		</Pane>
		)
}
export default Comments