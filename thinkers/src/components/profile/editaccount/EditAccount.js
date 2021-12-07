import React, {Fragment} from 'react'
import ProfileHeader from '../ProfileHeader'
import Footer from '../../Footer'
import EditAccountForm from './EditAccountForm'
import * as Yup from 'yup'
import {navigate} from '@reach/router'
import {useState, useEffect} from 'react'
import Error from '../../../components/Error'

const EditAccount =(props)=> {

	const validationSchema = Yup.object({
		name: Yup.string().required('Required!'),
		email: Yup.string().email('Invalid email!').required('Required!')
	})

	const [error, setError] = useState()
	const [user, setUser] = useState({})
	const [formValues, setFormValues] = useState(null)

	useEffect(()=> {
		fetch(`https://nameless-spire-69225.herokuapp.com/profile/${props.id}`, {
			headers:{
				'Authorization':window.localStorage.getItem('token')
			}
		})
		.then(response => response.json())
		.then(user => {
			user.map(user => {
				return setUser({name: user.name, email: user.email})
			})
		})
		.catch(console.log)
	},[props.id])

		const initialValues = {
		name: user.name,
		email: user.email
	}

	const onSubmit =(formValues, onSubmitProps)=> {
		setFormValues(formValues)
		fetch(`https://nameless-spire-69225.herokuapp.com/update_profile/${props.id}`, {
			method: 'PUT',
			mode: 'cors',
			cache: 'no-cache',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			},
			body: JSON.stringify(formValues)
		})
		.then(response => {return response.json()})
		.then(() => {return navigate(`/profile/${props.id}`)})		
		.catch(error => setError('Could not update account.'))
	}

	return(
		<Fragment>
		<ProfileHeader id={props.id}/>
		<EditAccountForm
		savedValues={formValues || initialValues}
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		enableReinitialize/>
		{
			error ? <Error error={error}/>
			:
			null
		}
		<Footer/>
		</Fragment>
		)
}
export default EditAccount