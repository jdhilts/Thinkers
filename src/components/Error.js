import React from 'react'
import {Pane, Text} from 'evergreen-ui'

const Error =(props)=> {

	return(
		<Pane 
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			marginBottom={20}> 
			<Text 
			color='#D14343'>
			{props.error}
			</Text>		
			</Pane>	
		)
}
export default Error