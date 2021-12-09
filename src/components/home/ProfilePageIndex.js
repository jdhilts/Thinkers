import React, {Fragment} from 'react'
import {Text, Pane} from 'evergreen-ui'
import ProfileHeader from '../profile/ProfileHeader'
import Footer from '../Footer'
import Blogger from '../blogger/Blogger'

const ProfilePageIndex =(props)=> {

	return(
		<Fragment>
		<ProfileHeader id={props.id}/>
		<Pane
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'
		width='100%'
		minWidth={375} 
		padding={20}>
		<Text
		fontSize={40}
		marging={20}
		style={{'fontFamily':'Amatic SC, cursive',
		'color':'#000000'}}>
		Welcome Back!
		</Text>
		<Text
		margin={20}>
		Lets Start Writing Something.
		</Text>
		<Blogger/>
		</Pane>
		<Footer/>
		</Fragment>
		)
}

export default ProfilePageIndex