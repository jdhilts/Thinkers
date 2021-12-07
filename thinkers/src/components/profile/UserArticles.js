import {Text, Pane, Textarea, Card, Button} from 'evergreen-ui'
import React, {Fragment, useState} from 'react'
import EditArticleForm from './editarticle/EditArticleForm'
import Moment from 'react-moment'

const UserArticles =(props)=> {

	const [toggle, setToggle] = useState(true)

	return(
		<Fragment>
		{ toggle ? 
			<Card 
			id='article_heading_container' 
			display='flex' 
			flexDirection='Column' 
			justifyContent='center'
			alignItems='center'
			marginTop={20}
			marginBottom={20} 
			padding={20} 
			border='default' 
			borderRadius='none' 
			width='100%'
			maxWidth={700} 
			minWidth={375} 
			maxHeight={400}>

			<Pane>
			<Text
			color='#101840'>
			{props.title}
			</Text>
			</Pane>
			<Pane>
			<Text
			color='#101840'>
			Published on: &nbsp; 
			<Moment format="MM/DD/YYYY">{props.date_published}</Moment>			
			</Text>
			</Pane>

			<Pane 
			id='article_body_container' 
			width='100%' 
			minWidth={375} 
			maxWidth={700}>

			<Textarea 
			id='body' 
			textSize='400' 
			width='100%' 
			disabled={true} 
			minWidth={375} 
			maxWidth={700} 
			minHeight={80} 
			maxHeight={80}
			textAlign='justify'
			marginTop={20}
			borderRadius='none'
			style={{'resize':'none','overflow':'hidden'}}
			value={props.body}>
			</Textarea>

			</Pane>
			<Button 
			border='default'
			backgroundColor='#EBF0FF'
			borderRadius='none'
			color='#101840'
			height={40}
			marginTop={20}
			type='button'
			onClick={() => setToggle(!toggle)}>
			Edit Article
			</Button>
			</Card>
			: 
			<EditArticleForm
			article_id={props.article_id} 
			title={props.title} 
			body={props.body} 
			id={props.id}
			date_published={props.date_published}/>
		}
		</Fragment>
		)
}
export default UserArticles