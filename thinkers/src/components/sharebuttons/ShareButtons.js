import React from 'react'
import {FacebookIcon, FacebookShareButton} from 'react-share'
import {Pane, Text} from 'evergreen-ui'

const ShareButtons =(props)=> {

	const url = `/article/${props.article_id}`
	const appId = `291810816008010`

	return(
		<Pane>
		<Pane
		style={{'display':'flex',
		'alignItems':'center',
		'justifyContent':'center'}}>
		<Text
		style={{'marginTop':'25px',
		'fontSize':'20px',
		'color':'#101840'}}>
		Share
		</Text>
		</Pane>

		<Pane
		style={{'marginTop':'25px',
		'display':'flex',
		'alignItems':'center',
		'justifyContent':'center',
		'flexDirection':'row'}}>
		<FacebookShareButton
		url={url}
		appId={appId}
		openShareDialogOnClick={true} >
		<FacebookIcon 
		size={50}/>
		</FacebookShareButton>
		</Pane>
		</Pane>
		)
}

export default ShareButtons
