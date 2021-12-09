import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button} from 'evergreen-ui'

const ForgotPasswordForm =(props)=> {

	return(
		<Pane
		id='forgot_password_container' 
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
				id='forgot_password'
				width={350}>

				<Card
				id='forgot_password_card'
				display='flex' 
				flexDirection='column'
				justifyContent='center' 
				alignItems='center'    
				marginTop={20} 
				padding={20} 
				border='default' 
				background='#F9F9FB' 
				width='100%'
				maxWidth={700} 
				minWidth={300} 
				maxHeight={350}
				borderRadius='none'
				marginBottom={20}>

				<Text
				textAlign='center'
				fontSize={30}
				marginBottom={20}
				marginTop={10}
				color='#101840'>
				Forgot Password
				</Text>

				<FormikControl
				height={40}
				minWidth={250}
				borderRadius='none'
				control='input' 
				type='email' 
				name='email'
				placeholder='Email'/>

				<Button
				paddingLeft={120}
				border='default'
				backgroundColor='#EBF0FF'
				borderRadius='none'
				color='#101840'
				height={40}
				minWidth={280}
				type='submit' 
				disabled={!formik.isValid}>
				Submit
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
export default ForgotPasswordForm