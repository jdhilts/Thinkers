import React from 'react'
import {Pane, Text} from 'evergreen-ui'

const ErrorText =(props)=> {

	return(
		<Pane>
		<Text
		textAlign='center'
		color='#D14343'>
			{props.children}
			</Text>
		</Pane>
		)
}
export default ErrorText;