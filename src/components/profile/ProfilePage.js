import {Spinner} from 'evergreen-ui'
import UserProfile from '../profile/UserProfile'
import React, {useState, useEffect, Fragment} from 'react'
import ProfileHeader from './ProfileHeader'
import Footer from '../Footer'

const ProfilePage =(props)=> {

	const [loading, setLoading] = useState()
	const [error, setError] = useState()
	const [user, setUser] = useState([])

	useEffect(()=> {
		setLoading(true)
		fetch(`https://nameless-spire-69225.herokuapp.com/profile/${props.id}`,{
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			}
		})
		.then(response => response.json())
		.then(user => setUser(user))
		.catch(error => setError(error))
		setLoading(false)	
	},[props.id])

	if(loading || !Array.isArray(user)){return <Spinner/>}

		if(error){setError('Could not load user! :(')}

			return(
				<Fragment>
				<ProfileHeader id={props.id}/>
				{		
					user.map(user => {							
						return(		
							<UserProfile 
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							password={user.password}/>
							)
					})
				}
				<Footer/>
				</Fragment>
				)
	}
	export default ProfilePage