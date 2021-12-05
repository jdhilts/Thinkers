import {Pane, Card, Text, Avatar, Button} from 'evergreen-ui'
import React, {Fragment, useState, useEffect} from 'react'
import CommentForm from '../comments/CommentForm'
import Comments from '../comments/Comments'
import Error from '../../components/Error'
import Moment from 'react-moment'
import ShareButtons from '../sharebuttons/ShareButtons'
import '../css/buttons.css'

const Article =(props)=> {

	const [toggle, setToggle] = useState(true)
	const [comments, setComments] = useState([])
	const [error, setError] = useState()
	const [profilePhoto, setProfilePhoto] = useState([])

	useEffect(()=> {
		fetch(`https://nameless-spire-69225.herokuapp.com/comments/${props.article_id}`)
		.then(response => response.json())
		.then(comments => setComments(comments))
		.catch(error => setError('There are no comments.'))
	},[props.article_id])

	useEffect(()=> {
		fetch(`https://nameless-spire-69225.herokuapp.com/photo/${props.id}`)
		.then(response => response.json())
		.then(profilePhoto => setProfilePhoto(profilePhoto))
		.catch(()=> console.log('No profile photo found.'))
	},[props.id])

	return(
		<Fragment>
		<Pane 
		id='article_page_container' 
		style={{'width':'100%', 
		'minWidth':'375px', 
		'height':'auto', 
		'display':'flex', 
		'flexDirection':'column', 
		'alignItems':'center', 
		'justifyContent':'center'}}>

		<Card 
		id='article_heading_container' 
		border='default'
		style={{'display':'flex', 
		'flexDirection':'row', 
		'marginTop':'20px', 
		'padding':'20px', 		 
		'background':'#FFFFFF', 
		'width':'100%',
		'maxWidth':'700px', 
		'minWidth':'350px', 
		'maxHeight':'400px',
		'borderRadius':'0'}}>
		<Pane 
		id='avatar_container'
		style={{'display':'flex', 
		'flexDirection':'column', 
		'alignItems':'center',  
		'width':'375px'}}>
		{
			profilePhoto.map(profilePhoto => {
				return( 
					<Avatar 
					key={profilePhoto.id}
					id='photo' 
					size={70}
					src={"http://localhost:3000/images/" + profilePhoto.photo}
					marginBottom={20} 
					name={props.name} 
					hashValue={props.id}/>
					)
			})
		}
		<Text 
		id='name'
		style={{'fontSize':'18px', 
		'color':'#101840',
		'marginBottom':'10px'}}>
		{props.name}
		</Text>

		<Text 
		id='published'
		style={{'fontSize':'18px', 
		'color':'#101840'}}>
		Author published on:
		</Text>

		<Text
		id='date_published'
		style={{'textAlign':'center',
		'fontSize':'18px', 
		'color':'#101840'}}>
		<Moment format="MM/DD/YYYY">{props.date_published}</Moment>
		</Text>		                          
		</Pane>

		<Pane 
		display='flex' 
		style={{'flexDirection':'column', 
		'alignItems':'center', 
		'width':'350px'}}>
		<Text 
		id='title' 
		style={{'marginTop':'40px', 
		'textAlig':'center', 
		'maxWidth':'350px', 
		'maxHeight':'150px',
		'fontSize':'20px',
		'color':'#101840'}}>
		{props.title}
		</Text>
		</Pane>
		</Card>

		<Pane 
		id='article_body_container' 
		style={{'width':'100%',
		'minWidth':'375px', 
		'maxWidth':'700px',
		'paddingLeft':'20px',
		'paddingRight':'20px',
		'paddingTop':'20px',
		'marginBottom':'20px'}}>
		<Text
		id='body'
		style={{'whiteSpace':'pre-wrap',
		'lineHeight':'25px',
		'fontSize':'18px', 
		'width':'100%', 
		'disabled':'true', 
		'minWidth':'375px', 
		'maxWidth':'700px', 
		'textAlign':'left',
		'color':'#101840',
		'marginTop':'20px'}}>
		{props.body}
		</Text>
		<ShareButtons article_id={props.article_id}/>
		</Pane>

		{ toggle ?
			<Button 
			className='button'
			type='button'
			onClick={(()=> setToggle(!toggle))}>
			Comment
			</Button>
			:
			<CommentForm 
			key={props.article_id}
			article_id={props.article_id}
			id={props.id}
			name={props.name}
			date_published={props.date_published}
			title={props.title}
			body={props.body}/>
		}
		</Pane>	

		{
			comments.map(comments => {
				return (
					<Comments
					key={comments.article_id}
					article_id={comments.article_id}
					id={comments.id}
					date_of_comment={comments.date_of_comment}
					comment={comments.comment}/>
					)
			})
		}
		{ error ? 
			<Error error={error}/>
			:
			null
		}
		</Fragment>
		)
}
export default Article;