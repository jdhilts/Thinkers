import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button, UnorderedList, ListItem} from 'evergreen-ui'
import {Link} from '@reach/router'

const LoginForm =(props)=> {

	return(	
		<Pane
		id='login_page_container'
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
				id='login'
				style={{'width':'350px'}}>

				<Card
				id='login_card'
				border='default'
				style={{'display':'flex',
				'outline':'#101840', 
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
				Login
				</Text>

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
				'borderRadius':'0'}}d
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
				to='/signup'>
				Sign Up
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
export default LoginForm







