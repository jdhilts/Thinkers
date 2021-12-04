import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button} from 'evergreen-ui'

const ResetPasswordForm =(props)=> {

	return(
		<Pane
		id='login_page_container' 
		width='100%' 
		minWidth={350} 
		height='auto' 
		display='flex' 
		flexDirection='column' 
		alignItems='center' 
		justifyContent='center'>

		<Formik initialValues={props.initialValues} 
		validationSchema={props.validationSchema} 
		onSubmit={props.onSubmit}>
		{
			formik => (
				<Form>

				<Pane 
				id='reset_password'
				width={350}>

				<Card
				id='reset_password_card'
				display='flex' 
				flexDirection='column'
				justifyContent='center' 
				alignItems='center'    
				marginTop={20}
				marginBottom={20} 
				padding={20} 
				border='default' 
				width='100%'
				maxWidth={700} 
				minWidth={300} 
				maxHeight={350}
				background='#F9F9FB' 
				borderRadius='none'>

				<Text
				textAlign='center'
				fontSize={30}
				marginBottom={20}
				marginTop={10}
				color='#101840'>
				Reset Password
				</Text>

				<FormikControl
				height={40}
				minWidth={250}
				borderRadius='none' 
				control='input' 
				type='email' 
				name='email'
				placeholder='Email'/>

				<FormikControl
				height={40}
				minWidth={250}
				borderRadius='none' 
				control='input' 
				type='password' 
				name='password'
				placeholder='Password'/>

				<Button							
				border='default'
				backgroundColor='#EBF0FF'
				borderRadius='none'
				color='#101840'
				height={40}
				minWidth={280}
				paddingLeft={80}
				marginBottom={20} 
				type='submit' 
				disabled={!formik.isValid}>
				Change Password
				</Button>
				</Card>

				</Pane>
				</Form>
				)
		}
		</Formik>
		</Pane>
		)
}
export default ResetPasswordForm