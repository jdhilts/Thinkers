import React from 'react'
import {Pane, UnorderedList, ListItem, Text} from 'evergreen-ui'
import {Link} from '@reach/router'

const Footer =()=> {
	
	return(
		<Pane 
		id='footer_Container' 
		height='auto' 
		width='100%' 
		borderTop
		marginLeft={0}>

		<UnorderedList  
		listStyle='none'
		display='flex' 
		flexDirection='row' 
		justifyContent='center'
		alignItems='center'>

		<ListItem 
		marginRight={24} 
		fontSize={15}>
		<Link 
		style={{'color':'black'}} 
		to='/privacy_policy'>
		Privacy Policy
		</Link>
		</ListItem>	

		<ListItem 
		marginRight={24} 
		fontSize={15}>
		<Link 
		style={{'color':'black'}} 
		to='/sitemap'>
		Sitemap
		</Link>
		</ListItem>

		<ListItem 
		marginRight={24} 
		fontSize={15}>
		<Link 
		style={{'color':'black'}} 
		to='/contact'>
		Contact
		</Link>
		</ListItem>

		<Text 
		marginRight={24} 
		fontSize={15}>
		Designed by J.Hilts
		</Text>
		</UnorderedList>

		</Pane>
		)
}
export default Footer;