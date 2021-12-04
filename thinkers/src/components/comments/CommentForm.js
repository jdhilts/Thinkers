import {Formik, Form} from 'formik'
import FormikControl from '../../formikcomponents/FormikControl'
import {Pane, Button, Text} from 'evergreen-ui'
import React, {Fragment, useState} from 'react'
import Error from '../../components/Error'
import * as Yup from 'yup'
import '../css/buttons.css'

const CommentForm =(props)=> {

	const [toggle, setToggle] = useState(true)
	const [error, setError] = useState()

	const initialValues = {
		comment: ''
	}

	const validationSchema = Yup.object({
		comment: Yup.string().required('Required!')
	})

	const onSubmit =(values, onSubmitProps)=> {
		fetch(`https://nameless-spire-69225.herokuapp.com/profile/${props.id}/article/${props.article_id}/comment`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
		.then(response => response.json())
		.then(()=> setToggle(!toggle))
		.then(()=> window.location.reload(true))
		.catch(error => setError('Unable to post comment.'))
	}


	return(
		<Fragment>
		{ toggle ?
			<Pane 
			id='comment_container' 
			width='100%'  
			marginBottom={20} 
			padding={20}   
			minWidth={350} 
			height='auto' 
			display='flex' 
			flexDirection='column' 
			alignItems='center' 
			justifyContent='center'>

			<Formik 
			initialValues={initialValues} 
			validationSchema={validationSchema} 
			onSubmit={onSubmit}>
			{
				formik => (
					<Form>		
					<Pane 
					textAlign='center'
					marginBottom={20}>
					<Text>
					Post Comment
					</Text>
					</Pane>

					<FormikControl
					style={{'white-space':'pre-wrap'}}
					fontSize={18}
					row='100%'
					cols={100}
					width='100%'
					maxWidth={700} 
					minWidth={350} 
					control='textarea'
					type='text'
					name='comment'
					placeholder='Comment'/>

					<Pane 
					marginTop={20}
					textAlign='center'>

					<Button
					className='buttons'
					type='submit' 
					disabled={!formik.isValid}>
					Post Comment
					</Button>

					<Button
					className='cancel_button'
					type='button' 
					onClick={()=> setToggle(!toggle)}>
					Cancel
					</Button>
					</Pane>
					{error ? <Error error={error}/>
					:
					null
				}
				</Form>
				)
			}
			</Formik>
			</Pane>
			:
			<Button 
			className='button'
			type='button'
			onClick={(()=> setToggle(!toggle))}>
			Comment
			</Button>
		}
		</Fragment>

		)
}

export default CommentForm