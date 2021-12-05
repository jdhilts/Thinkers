import React from 'react'
import {Pane, ListItem, UnorderedList} from 'evergreen-ui'
import {Link, navigate} from '@reach/router'

const HomeHeader =(props)=> {

	const onSubmit =(event)=> {
		window.localStorage.removeItem('token')
		navigate('/', {replace: true})
		window.location.reload(true)
	}
	return(
		<Pane 
		id='heading_container' 
		elevation={2}
		minWidth={375} 
		width='100%'>

		<Pane 
		id='heading'
		minWidth={350}
		display='flex'
		flexDirection='column' 
		alignItems='center'
		justifyContent='center'
		width='100%'>

		<Link to={`/profile/${props.id}`}
		style={{'textAlign':'center',
		'color':'black',
		'textDecoration':'none',
		'fontFamily':'Amatic SC, cursive',
		'fontSize':'100px',
		'margin':'0px'}}>		
		Thinkers		
		</Link>
		<UnorderedList 
		style={{'listStyle':'none','display':'flex','marginTop':'10px','marginBottom':'10px','marginLeft':'0px'}}>
		<ListItem 
		marginRight={12} 
		fontSize={20} >
		<Link style={{'color':'black'}} to={`/profile/${props.id}`}>
		Profile
		</Link>
		</ListItem>

		<ListItem  
		fontSize={20}>
		<button
		type='submit'
		style={{'color':'black'}}
		onClick={onSubmit}>
		Log Out
		</button>
		</ListItem>
		</UnorderedList>
		</Pane>
		</Pane>

		)
}

export default HomeHeader