import {Pane, Avatar, Text, Card, Spinner} from 'evergreen-ui'
import React, {useState, useEffect, Fragment} from 'react'
import UserArticles from '../profile/UserArticles'
//import {Link} from '@reach/router'

const UserProfile =(props)=> {

	const [loading, setLoading] = useState()
	const [error, setError] = useState()
	const [userArticles, setUserArticles] = useState([])
	const [photo, setPhoto] = useState([])

	useEffect(()=> {
		setLoading(true)
		fetch(`https://nameless-spire-69225.herokuapp.com/articles/${props.id}`,{
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			}
		})	
		.then(response => {return response.json()})
	    .then(userArticles => setUserArticles(userArticles))
	    .catch(error => setError(error))
	},[props.id])

	useEffect(()=> {		
		fetch(`https://nameless-spire-69225.herokuapp.com/photo/${props.id}`)
		.then(response => {return response.json()})
		.then(photo => setPhoto(photo))
		.catch(()=> console.log('User has no profile photo.'))
		setLoading(false)
	},[props.id])

	if(loading || !Array.isArray(userArticles)){return <Spinner/>}

		if(error){setError('Could not load articles! :(')}

			return(
				<Fragment>
				<Pane
				id='profile_page_container' 
				width='100%'
				minWidth={375} 
				height='auto' 
				display='flex' 
				flexDirection='column' 
				alignItems='center' 
				justifyContent='center'>

				<Card 
				id='profile_heading_container' 
				display='flex' 
				flexDirection='Column' 
				justifyContent='center'
				alignItems='center'
				marginTop={20} 
				padding={20} 
				border='default' 
				borderRadius='none'
				background='#F9F9FB' 
				width='100%'
				maxWidth={700} 
				minWidth={375} 
				maxHeight={400}>

				<Text 
				textAlign='center'
				fontSize={30}
				marginBottom={20}
				marginTop={10}
				color='#101840'>
				Profile
				</Text>
				{
					photo.map(photo => {
						return(
							<Avatar 
							key={photo.id}
							src={"https://nameless-spire-69225.herokuapp.com/images/"+photo.photo}
							id='photo' 
							size={70} 
							name={props.name} 
							hashValue={props.id}/>
							)
					})

				}
				<Text
				color='#101840'
				marginTop={20}>
				{props.name}
				</Text>
				</Card>

				<Text 
				color='#101840'
				marginTop={20}>
				{props.name + "'s"} Articles
				</Text>
				{
					userArticles.map(userArticles =>{
						return(
							<UserArticles
							key={userArticles.article_id}
							id={props.id}
							title={userArticles.title}
							body={userArticles.body}
							date_published={userArticles.date_published}
							article_id={userArticles.article_id}/>
							)
					})
				}
				</Pane>
				</Fragment>
				)
	}
	export default UserProfile