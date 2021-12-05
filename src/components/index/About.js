import React from 'react' 
import {Pane, Text, Heading} from 'evergreen-ui'

const About =()=> {
	return(
		<Pane display='flex' flexDirection='column' width='100%' minWidth={375} 
		maxWidth={800}>
		<Text textAlign='justify' fontSize={20} width='100%' paddingLeft={20}
		paddingRight={20} style={{'fontFamily':'Neucha, Regular',
		'color':'black'}}>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Thinkers is a blogger site and service
		that's open to everyone who wants to use a platform
		to write about whatever it is thats on their minds.
		&nbsp;Whether you want to give valuable information about a subject or just talk about
		your own personal experiences, you can do just that here on Thinkers.</p>
		</Text>
		<Pane>
		<Heading
		textAlign='center'
		marginBottom={20}
		color='#000000'>
		Below are the 10 latest articles.
		</Heading>
		</Pane>
		</Pane>
		)
}
export default About