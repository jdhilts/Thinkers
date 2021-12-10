import React, {Fragment} from 'react'
import * as Yup from 'yup'
import {useState} from 'react'
import SignUpForm from '../signup/SignUpForm'
import Error from '../Error'
import SignUpHeader from '../signup/SignUpHeader'
import Alert from '../Alert'
import Footer from '../Footer'

const SignUpPage =(props)=> {

	const initialValues = {
		name:'',
		email: '',
		password: ''
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Required!'),
		email: Yup.string().email('Invalid email!').required('Required!'),
		password: Yup.string().required('Required!') 
	})

	const [error, setError] = useState()
	const [isShown, setIsShown] = useState(false)
	const [dialog, setDialog] = useState()
	const [navigate, setNavigate] = useState()

	const onSubmit =(values, onSubmitProps)=> {
		fetch('https://afternoon-temple-12069.herokuapp.com/signup', {
			method: 'POST',
			mode: 'Cors',
			'Access-Control-Allow-Origin': *,
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
		.then(response => response.json())
		.then(user => {
			if(user[0].email){
				setDialog('Make sure to check your email to confirm your email address.')
				setIsShown(true)
				setNavigate('/index')				
			} else {
				setError('There is already an account with that email address.')
			}					
		})
		.catch(console.log)
	}

	//setError('There is already an account with that email address.')

	return(
		<Fragment>
		<SignUpHeader/>
		{/*An alert message to rmind to check their email for the reset link.*/}
		{
			isShown ? <Alert dialog={dialog} isShown={isShown} navigate={navigate}/>
			:
			null

		}
		<SignUpForm
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
export default SignUpPage