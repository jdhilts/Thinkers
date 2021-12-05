import React from 'react'
import {Pane, Text} from 'evergreen-ui'

const SignUpError =(props)=> {

	return(
		<Pane 
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'>

		<Text
		color='#D14343'
		marginTop={10}
		marginBottom={3}>
		{props.error}
		</Text>
		</Pane>	
		)
}
export default SignUpError