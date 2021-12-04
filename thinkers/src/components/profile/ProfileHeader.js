import React, {useState} from 'react'
import {Pane, Button, ListItem, UnorderedList} from 'evergreen-ui'
import {Link, navigate} from '@reach/router'

const ProfileHeader =(props)=> {

	const [toggle, setToggle] = useState(false)

	const onSubmit =(event)=> {
		window.localStorage.removeItem('token')
		navigate('/', {replace: true})
		window.location.reload(true)
	}
	
	return(

		<Pane>

		<Pane 
		id='header_container' 
		minWidth={350} 
		display='flex'		
		alignItems='center'
		justifyContent='center'
		width='100%'>

		<Pane 
		id='heading'>
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

		</Pane>

	{/*This is where I would like to put the menu.*/}
	<Pane
	width='100%'
	minWidth={350}
	display='flex'
	alignItems='center'
	justifyContent='center'
	elevation={2}>

	<Button
	marginRight={20}
	marginTop={20}
	marginLeft={20}
	marginBottom={20}
	onClick={()=> setToggle(!toggle)}>
	Menu
	</Button>

	</Pane>

	{
		toggle ? 
		<Pane
		display='inline-block'
		position='absolute'
		minWidth='200px'
		textAlign='center'>

		<UnorderedList 
		width='200px'
		display='flex'
		flexDirection='column'
		marginBottom={10}
		marginRight={20}
		backgroundColor='#F9F9FB' 
		textAlign='left'
		listStyle='none'
		position='fixed'
		zIndex='1'
		top='25%'
		left='45%'
		right='50%'
		style={{'boxShadow': '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>

		<ListItem 
		marginLeft={15} 
		fontSize={20}>
		<Link 
		style={{'color':'black'}}
		to={`/create_article/${props.id}`}>
		Create Article
		</Link>
		</ListItem>

		<ListItem 
		marginLeft={15} 
		fontSize={20}>
		<Link 
		style={{'color':'black'}}
		to={`/update_password/${props.id}`}>
		Change Password
		</Link>
		</ListItem>

		<ListItem 
		marginLeft={15} 
		fontSize={20}>
		<Link
		style={{'color':'black'}}
		to={`/update_profile/${props.id}`}>
		Edit Account
		</Link>
		</ListItem>

		<ListItem 
		marginLeft={15} 
		fontSize={20} >
		<Link style={{'color':'black'}} to={`/upload_photo/${props.id}`}>
		Profile Photo
		</Link>
		</ListItem>

		<ListItem 
		marginLeft={15} 
		fontSize={20} >
		<Link style={{'color':'black'}} to={`/profile/${props.id}`}>
		Profile
		</Link>
		</ListItem>

		<ListItem  
		fontSize={20}>
		<Button
		marginLeft={15}
		type='submit'
		style={{'color':'black'}}
		onClick={onSubmit}>
		Log Out
		</Button>
		</ListItem>
		</UnorderedList>
		</Pane>

		:
		null

	}
	</Pane>
	)
}
export default ProfileHeader