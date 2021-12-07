import {Pane, Card, Text, Textarea} from 'evergreen-ui'
import React, {Fragment} from 'react'
import {Link} from '@reach/router'
import Moment from 'react-moment'

const ArticleSnippet =(props)=> {

	return(	
		<Fragment>		
		<Card 
		id='article_heading_container' 
		display='flex' 
		flexDirection='row' 
		padding={20} 
		border='default'
		borderRadius='none' 
		background='white' 
		width='100%'
		maxWidth={700} 
		minWidth={375} 
		maxHeight={400}>

		<Pane 
		display='flex' 
		flexDirection='column' 
		alignItems='center'  
		width={375}>

		<Text 
		id='name'
		fontSize={18}
		color='#101840'>
		{props.name}
		</Text>

		<Text 
		id='published' 
		fontSize={16}
		margin={0}
		color='#101840'>
		Author published on:
		</Text>	

		<Text
		id='date_published'
		textAlign='center' 
		fontSize={16}
		margin={0}
		color='#101840'>
		<Moment format="MM/DD/YYYY">{props.date_published}</Moment>
		</Text>
		</Pane>

		<Pane 
		display='flex' 
		flexDirection='column' 
		alignItems='center' 
		width={350}>

		<Text 
		id='title' 
		marginTop={40} 
		textAlign='center' 
		maxWidth={350} 
		maxHeight={150}
		fontSize={20}
		color='#101840'>
		{props.title}
		</Text>

		</Pane>
		</Card>

		<Pane 
		id='article_body_container' 
		width='100%' 
		minWidth={375} 
		maxWidth={700}>

		<Textarea 
		id='body' 
		textSize='500' 
		width='100%' 
		disabled={true} 
		minWidth={375} 
		maxWidth={700} 
		minHeight={80} 
		maxHeight={80} 		 
		overflow='hidden'
		color='black'
		borderRadius='none'
		backgroundColor='#FAFBFF'
		style={{'resize':'none'}}
		value={props.body}>
		</Textarea>

		</Pane>

		<Link 
		style={{'height':'40px',
		'marginTop':'10px',
		'marginBottom':'5px'}} 
		to={`article/${props.article_id}`}>
		Read Whole Article
		</Link>
		</Fragment>
		)
}

export default ArticleSnippet