import React, {Fragment, useState} from 'react'
import {Text, Pane} from 'evergreen-ui'
import * as Yup from 'yup'
import Error from '../../components/Error'
import Header from '../Header'
import Footer from '../Footer'
import ForgotPasswordForm from './ForgotPasswordForm'
import Alert from '../Alert'

const ForgotPassword =(props)=> {

	const initialValues = {email: ''}

	const validationSchema = Yup.object({email: Yup.string().email().required('Required!')})

	const [error, setError] = useState()
	const [isShown, setIsShown] = useState(false)
	const [dialog, setDialog] = useState()
	const [navigate, setNavigate] = useState()

	const onSubmit =(values, onSubmitProps)=> {
		fetch('https://afternoon-temple-12069.herokuapp.com/send_reset_email', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values)
		})
		.then(response => response.json())
		.then(email => {
			if(email === 'Email sent.'){
				setDialog('Make sure to check your email for the reset password link.')
				setIsShown(true)
				setNavigate('/index')
			} else {
				setError('That email does not exist.')
			}
		})
		.catch(console.log)
	}

	return(
		<Fragment>
		<Header/>
		{/*An alert message to rmind to check their email for the reset link.*/}
		{
			isShown ? <Alert dialog={dialog} isShown={isShown} navigate={navigate}/>
			:
			null

		}
		<ForgotPasswordForm
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		initialValues={initialValues}/>
		<Pane
		textAlign='center'
		marginBottom={20}>
		{ 
			error ? <Error error={error}/>
			:
			null
		}
		<Text>
		An email with the link to reset your password will be sent to your email.
		</Text>
		</Pane>
		<Footer/>
		</Fragment>

		)
}
export default ForgotPassword