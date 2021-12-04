import React from 'react'
import {Pane, Heading} from 'evergreen-ui'

const  NotFound =()=> {
	return(
		<Pane
		display='flex'
		alignItems='center'
		justifyContent='center'>
		<Heading
		color='#D14343'
		marginTop={300}
		size={900}>
		PAGE NOT FOUND
		</Heading>
		</Pane>
		)
}
 export default NotFound