import React, {Fragment, useState} from 'react'
import ProfileHeader from '../ProfileHeader'
import Footer from '../../Footer'
import CreateArticleForm from './CreateArticleForm'
import * as Yup from 'yup'
import {Spinner} from 'evergreen-ui'
import Error from '../../../components/Error'
import {navigate} from '@reach/router'

const CreateArticle =(props)=> {

	const initialValues = {
		title: '',
		body:''
	}

	const validationSchema = Yup.object({
		title: Yup.string().required('Required!'),
		body: Yup.string().required('Required!')
	})

	const [error, setError] = useState()
	const [loading, setLoading] = useState()

	const onSubmit =(values, onSubmitProps)=> {
		setLoading(true)
		fetch(`https://nameless-spire-69225.herokuapp.com/create_article/${props.id}`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			},
			body: JSON.stringify(values)
		})
		.then(response => response.json())
		.then(()=> navigate(`/profile/${props.id}`))
		.catch(error => setError('Could not create article!'))
		setLoading(false)
	}

	if(loading){return <Spinner/>}

		return(
			<Fragment>
			<ProfileHeader id={props.id}/>
			<CreateArticleForm
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}/>
			{
				error ? <Error error={error}/>
				:
				null
			}
			<Footer/>
			</Fragment>
			)
}
export default CreateArticle