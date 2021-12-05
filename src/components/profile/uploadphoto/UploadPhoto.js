import React, {Fragment, useState, useEffect} from 'react'
import {Pane, Card, Text, Button, Avatar} from 'evergreen-ui'
import ProfileHeader from '../ProfileHeader'
import Footer from '../../Footer'
import {Link, navigate} from '@reach/router'

const UploadPhoto =(props)=> {

	const [photo, setPhoto] = useState()
	//const [error, setError] = useState()
	const [preview, setPreview] = useState()
	const [photoExist, setPhotoExist] = useState()

	//useEffect and get the current photo from the database
	//If photoExist then setPhotoExist to true  
	//Fetch http://localhost:3000/update_photo/:id
	//Else Fetch http://localhost:3000/upload_photo/:id

	useEffect(()=> {
		fetch(`https://afternoon-temple-12069.herokuapp.com/photo/${props.id}`,{
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			}
		})
		.then(response => {return response.json()})
		.then(photoExist => {
			if(!photoExist[0]){
				setPhotoExist(false) 
			} else {
				setPhotoExist(true)
			}
		})
		.catch(()=> console.log('Unable to get photo.'))
	},[props.id])

	const onChange =(event)=> {
		setPreview(URL.createObjectURL(event.target.files[0]))
		setPhoto(event.target.files[0])
	}

	const onSubmit =(event)=> {
		event.preventDefault()
		const formData = new FormData()
		formData.append('photo', photo)

		if(photoExist){
			fetch(`https://afternoon-temple-12069.herokuapp.com/update_photo/${props.id}`, {
				method: 'PUT',
				mode: 'cors',
				cache: 'no-cache',
				body: formData,
				headers:{
					'Authorization': window.localStorage.getItem('token'),
				},
			})
			.then(response => {return response.json()})
			.then(()=> {return navigate(`/profile/${props.id}`)})		
			.catch(() => console.log('Something went wrong!'))
		} else {
			fetch(`https://afternoon-temple-12069.herokuapp.com/upload_photo/${props.id}`, {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				body: formData,
				headers:{
					'Authorization': window.localStorage.getItem('token')
				},
			})
			.then(response => {return response.json()})
			.then(()=> {return navigate(`/profile/${props.id}`)})		
			.catch(() => console.log('Something went wrong!'))
		}
	}

	return(
		<Fragment>
		<ProfileHeader id={props.id}/>
		<Pane
		id='profile_photo_container' 
		width='100%' 
		minWidth={350} 
		height='auto' 
		display='flex' 
		flexDirection='column' 
		alignItems='center' 
		justifyContent='center'>

		<Pane 
		id='profile_photo'
		width={350}>

		<Card
		id='upload_profile_photo'
		display='flex' 
		flexDirection='column'
		justifyContent='center' 
		alignItems='center'    
		marginTop={20}
		marginBottom={20} 
		padding={20} 
		border='default' 
		width='100%'
		maxWidth={700} 
		minWidth={300} 
		maxHeight={350}
		background='#F9F9FB' 
		borderRadius='none'>

		<Text
		textAlign='center'
		fontSize={30}
		marginBottom={20}
		marginTop={10}
		color='#101840'>
		Profile Photo
		</Text>

		<Avatar
		size={70}
		src={preview}
		marginBottom={20}
		hashValue={props.id}/>

		<form 
		style={{'textAlign':'center',
		'maxWidth':'350px'}}
		onSubmit={onSubmit}>

		<input 
		style={{'marginRight':'20px',
		'marginLeft':'5px',
		'overflow': 'hidden',
        'textOverflow': '----',
		'height':'40px',
		'width':'100%',
		'padding':'0px',
		'marginBottom':'20px'}}	 
		type='file' 
		name='photo'
		accept='image/*'
		onChange={onChange}/>

		<Button							
		border='default'
		backgroundColor='#EBF0FF'
		borderRadius='none'
		color='#101840'
		height={40}
		minWidth={280}
		paddingLeft={100}
		marginBottom={20} 
		marginTop={20}
		type='submit'>
		Upload Photo
		</Button>
		</form>

		<Pane>
		<Link
		style={{'height':'30px'}} 
		to={`/profile/${props.id}`}>
		Cancel
		</Link>
		</Pane>
		</Card>

		</Pane>
		</Pane>

		<Footer/>
		</Fragment>
		)	
}
export default UploadPhoto
