import React from 'react'
import {Pane, ListItem, UnorderedList} from 'evergreen-ui'
import {Link} from '@reach/router'

const UploadPhotoHeader =(props)=> {
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
		</Pane>

		<Pane 
		id='navlinks' 
		display='flex' 
		justifyContent='center' 
		alignItems='center'
		flexDirection='column' 
		width='100%'
		paddingLeft={20}
		paddingRight={20}>

		<UnorderedList 
		style={{'listStyle':'none','display':'flex','marginTop':'10px','marginBottom':'10px','marginLeft':'0px'}}>
		<ListItem 
		marginRight={12} 
		fontSize={20}>
		<Link 
		style={{'color':'black'}}
		to={`/create_article/${props.id}`}>
		Create Article
		</Link>
		</ListItem>

		<ListItem 
		marginRight={12} 
		fontSize={20}>
		<Link 
		style={{'color':'black'}}
		to={`/update_password/${props.id}`}>
		Change Password
		</Link>
		</ListItem>

		<ListItem 
		marginRight={12} 
		fontSize={20}>
		<Link
		style={{'color':'black'}}
		to={`/update_profile/${props.id}`}>
		Edit Account
		</Link>
		</ListItem>

		<ListItem 
		marginRight={12} 
		fontSize={20}>
		<Link
		style={{'color':'black'}}
		to={`/profile/${props.id}`}>
		Profile
		</Link>
		</ListItem>

		<ListItem  
		fontSize={20}>
		<Link 
		style={{'color':'black'}}
		to='/'>
		Log Out
		</Link>
		</ListItem>
		</UnorderedList>

		</Pane>
		</Pane>
		)
}
export default UploadPhotoHeader