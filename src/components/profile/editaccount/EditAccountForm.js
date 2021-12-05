import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button} from 'evergreen-ui'

const EditAccountForm =(props)=> {
	
	return(

		<Formik 
		savedValues={props.formValues || props.initialValues}
		initialValues={props.initialValues} 
		validationSchema={props.validationSchema} 
		onSubmit={props.onSubmit}
		enableReinitialize>
		{
			formik => (
				<Form>				
				<Pane id='edit_account_container' 
				display='flex' 
				flexDirection='column' 
				alignItems='center' 
				justifyContent='center'>

				<Card
				id='edit_profile_card'
				display='flex' 
				flexDirection='column'
				justifyContent='center' 
				alignItems='center'    
				marginTop={20}
				marginBottom={20} 
				padding={20} 
				border='default'
				borderRadius='none' 
				background='#F9F9FB' 
				width='100%'
				maxWidth={375} 
				minWidth={350} 
				maxHeight={350}>

				<Text
				textAlign='center'
				fontSize={30}
				marginBottom={20}
				marginTop={10}
				color='#101840'>
				Edit Account
				</Text>

				<FormikControl
				height={40}
				minWidth={250}
				borderRadius='none' 
				control='input' 
				type='text' 
				name='name'
				values={props.initialValues.name}
				placeholder={'Name'}/>

				<FormikControl
				height={40}
				minWidth={250}
				borderRadius='none'
				control='input' 
				type='email' 
				name='email'
				values={props.initialValues.email}
				placeholder={'Email'}/>

				<Button
				paddingLeft={100}
				border='default'
				backgroundColor='#EBF0FF'
				borderRadius='none'
				color='#101840'
				height={40}
				minWidth={280}
				type='submit' 
				disabled={!formik.isValid}>
				Edit Profile
				</Button>
				</Card>

				</Pane>
				</Form>
				)
		}
		</Formik>
		)
}
export default EditAccountForm