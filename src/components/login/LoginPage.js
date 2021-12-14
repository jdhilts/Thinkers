import React, {Fragment} from 'react'
import LoginForm from '../login/LoginForm'
import * as Yup from 'yup'
import {navigate} from '@reach/router'
import {useState} from 'react'
import Error from '../Error'
import LoginHeader from '../login/LoginHeader'
import Footer from '../Footer'

const LoginPage =(props)=> {

	const initialValues = {
		email: '',
		password: ''
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email!').required('Required!'),
		password: Yup.string().required('Required!') 
	})

	const [error, setError] = useState()

	const saveAuthTokenInSession =(token)=> {
		window.localStorage.setItem('token', token)
	}

	const onSubmit =(values, onSubmitProps)=> {
		fetch('https://afternoon-temple-12069.herokuapp.com/login', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
		.then(response => response.json())
		.then(id => { 
			if(id.id && id.success === 'true'){
				saveAuthTokenInSession(id.token)
				navigate(`/profile/${id.id}`, {replace: true})
				window.location.reload(true)
			} else {			
				setError('There are no accounts with that password or email.')
			}
		})
		.catch(error => setError('Something went wrong!'))
	}	
	
	return(
		<Fragment>
		<LoginHeader/>
		<LoginForm
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}/>
		{ 
			error ?
			<Error error={error}/>
			: 
			null
		}
		<Footer/>
		</Fragment>
		)
}
export default LoginPage