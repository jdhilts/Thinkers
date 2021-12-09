import React, {Fragment, useState} from 'react'
import * as Yup from 'yup'
import {navigate} from '@reach/router'
import Footer from '../../Footer'
import ProfileHeader from '../ProfileHeader'
import Error from '../../../components/Error'
import ChangePasswordForm from './ChangePasswordForm' 

const ChangePassword =(props)=> {

	const initialValues = {
		password: ''
	}

	const validationSchema = Yup.object({
		password: Yup.string().required('Required!')
	})

	const [error, setError] = useState()

	const onSubmit =(values, onSubmitProps)=> {
		fetch(`https://afternoon-temple-12069.herokuapp.com/update_password/${props.id}`, {
			method: 'PATCH',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			},
			body: JSON.stringify(values),
		})
		.then(response => response.json())
		.then(()=> {
			navigate(`/profile/${props.id}`)
			window.location.reload(true)
		})
		.catch(error => setError('Unable to change password!'))
	}
	
	return(
		<Fragment>
		<ProfileHeader id={props.id}/>
		<ChangePasswordForm 
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		id={props.id}/>
		{ error ? <Error error={error}/>
		:
		null
	}
	<Footer/>
	</Fragment>
	)
}
export default ChangePassword