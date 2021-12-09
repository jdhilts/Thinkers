import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button, ListItem, UnorderedList} from 'evergreen-ui'
import {Link} from '@reach/router'

const SignUpForm =(props)=> {

	return(
		<Pane 
		id='signup_page_container' 
		style={{'width':'100%', 
		'minWidth':'350px', 
		'height':'auto', 
		'display':'flex', 
		'flexDirection':'column', 
		'alignItems':'center', 
		'justifyContent':'center'}}>

		<Formik initialValues={props.initialValues} 
		validationSchema={props.validationSchema} 
		onSubmit={props.onSubmit}>
		{
			formik => (
				<Form>

				<Pane 
				id='signup'
				style={{'width':'350px'}}>

				<Card
				id='signup_card'
				border='default'
				style={{'display':'flex', 
				'flexDirection':'column',
				'justifyContent':'center', 
				'alignItems':'center',    
				'marginTop':'20px',
				'padding':'20px', 
				'background':'#F9F9FB', 
				'width':'100%',
				'maxWidth':'700px',
				'minWidth':'300px', 
				'maxHeight':'350px',
				'borderRadius':'0',
				'marginBottom':'20px'}}>

				<Text
				style={{'textAlign':'center',
				'fontSize':'30px',
				'marginBottom':'20px',
				'marginTop':'10px',
				'color':'#101840'}}>
				Sign Up
				</Text>

				<FormikControl
				style={{'height':'40px',
				'minWidth':'250px',
				'borderRadius':'0'}} 
				control='input' 
				type='text' 
				name='name'
				placeholder='Name'/>

				<FormikControl
				style={{'height':'40px',
				'minWidth':'250px',
				'borderRadius':'0'}} 
				control='input' 
				type='email' 
				name='email'
				placeholder='Email'/>

				<FormikControl 
				style={{'height':'40px',
				'minWidth':'250px',
				'borderRadius':'0'}}  
				control='input'
				type='password' 
				name='password'
				placeholder='Password'/>

				<Button
				style={{'backgroundColor':'#EBF0FF',
				'color':'#101840',
				'height':'40px',
				'minWidth':'280px',
				'borderRadius':'0',
				'fontSize':'15px'}}
				type='submit' 
				disabled={!formik.isValid}>
				Submit
				</Button>
				</Card>

				<UnorderedList 
				style={{'listStyle':'none',
				'display':'flex',
				'flexDirection':'row',
				'alignItems':'center',
				'justifyContent':'center',
				'marginBottom':'20px'}}>
				<ListItem>
				<Link 
				style={{'marginRight':'20px'}}
				to='/send_reset_email'>
				Forgot Password?
				</Link>
				</ListItem>

				<ListItem>
				<Link 
				to='/login'>
				Login
				</Link>
				</ListItem>
				</UnorderedList>

				</Pane>
				</Form>
				)
		}
		</Formik>
		</Pane>
		)
}
export default SignUpForm