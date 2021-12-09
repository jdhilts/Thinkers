import React, {Fragment, useState} from 'react'
import * as Yup from 'yup'
import {navigate} from '@reach/router'
import Footer from '../Footer'
import Header from '../Header'
import Error from '../Error'
import ResetPasswordForm from './ResetPasswordForm' 

const ResetPassword =(props)=> {

const initialValues = {password: '', email: ''}

	const validationSchema = Yup.object({
		password: Yup.string().required('Required!'),
		email: Yup.string().email('Invalid email.').required('Required!')
	})

	const [error, setError] = useState()

	const onSubmit =(values, onSubmitProps)=> {
		fetch(`https://afternoon-temple-12069.herokuapp.com/reset_password/`, {
			method: 'PATCH',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
		.then(response => response.json())
		.then(email => {
			if(!email[0]){
				setError('There are no accounts with that email!')
			} else {
				navigate('/login')
			}
		})
		.catch(error => setError('Unable to reset password!'))
	}
	
	return(
		<Fragment>
		<Header id={props.id}/>
		<ResetPasswordForm 
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}/>
		{ error ? <Error error={error}/>
		:
		null
	}
	<Footer/>
	</Fragment>
	)		
}
export default ResetPassword