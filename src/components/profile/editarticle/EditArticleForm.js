import React, {Fragment, useState} from 'react'
import {Pane, Card, Text, Button} from 'evergreen-ui'
import UserArticles from '../UserArticles' 
import {Formik, Form} from 'formik'
import FormikControl from '../../../formikcomponents/FormikControl'
import * as Yup from 'yup'
import Error from '../../../components/Error'

const EditArticleForm =(props)=> {

	const [toggle, setToggle] = useState(true)
	const [formValues, setFormValues] = useState(null)

	const initialValues = {
		title: props.title,
		body: props.body
	}

	const validationSchema = Yup.object({
		title: Yup.string().required('Required!'),
		body: Yup.string().required('Required!')
	})

	const [error, setError] = useState()

	const onSubmit =(formValues, onSubmitProps)=> {
		setFormValues(formValues)
		fetch(`https://afternoon-temple-12069.herokuapp.com/update_article/${props.article_id}`,{
			method: 'PATCH',
			mode: 'cors',
			cache: 'no-cache',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': window.localStorage.getItem('token')
			},
			body: JSON.stringify(formValues)
		})
		.then(response => response.json())
		.then(()=> setToggle(!toggle))
		.then(()=> window.location.reload(true))
		.catch(error => setError('Could not edit article at this time.'))		
	}

	return(
		<Fragment>
		{ toggle ? 
			<Formik 
			savedValues={formValues || initialValues}
			initialValues={initialValues} 
			validationSchema={validationSchema}
			onSubmit={onSubmit} 
			enableReinitialize>
			{
				formik => (
					<Form>	
					<Card 
					id='article_heading_container' 
					display='flex' 
					flexDirection='Column' 
					justifyContent='center'
					alignItems='center'
					marginTop={20}  
					border='default' 
					borderRadius='none'
					background='#F9F9FB'
					width='100%'
					maxWidth={700} 
					minWidth={375}>

					<Pane>
					<Pane
					marginTop={20}
					marginBottom={20}
					textAlign='center'>
					<Text
					size={800}
					color='#101840'>
					Title
					</Text>
					</Pane>

					<FormikControl
					textAlign='center'
					color='#101840'
					height={40}
					minWidth={250}
					borderRadius='none'
					fontSize={18}
					control='input' 
					type='text' 
					name='title'
					values={props.title}/>
					</Pane>

					<Pane 
					id='article_body_container' 
					width='100%' 
					minWidth={375} 
					minHeight={450}>

					<Pane
					textAlign='center'
					marginBottom={20}>
					<Text
					size={800}
					color='#101840'>
					Article
					</Text>
					</Pane>

					<FormikControl
					style={{'whiteSpace':'pre-wrap','lineHeight':'25px'}}
					fontSize={18}
					row='100%'
					cols={80}
					width='100%'
					maxWidth={700} 
					minWidth={350}
					height={700}
					borderRadius='none'
					control='textarea'
					type='text'
					name='body'
					values={props.body}/>
					</Pane>

					<Pane
					marginTop={20}
					marginBottom={20}>
					<Button 
					marginRight={20}
					paddingLeft={45}
					border='default'
					backgroundColor='#EBF0FF'
					borderRadius='none'
					color='#101840'
					height={40}
					minWidth={137}
					type='submit'>
					Submit
					</Button>

					<Button 
					paddingLeft={48}
					border='default'
					backgroundColor='#F9DADA'
					borderRadius='none'
					color='#101840'
					height={40}
					minWidth={137}
					type='button'
					onClick={()=> setToggle(!toggle)}>
					Cancel
					</Button>
					</Pane>
					</Card>
					{
						error ? <Error error={error}/>
						:
						null
					}
					</Form>
					)
			}
			</Formik>
			: 
			<UserArticles 
			date_published={props.date_published}
			title={props.title}
			body={props.body}
			article_id={props.article_id}/>
		}
		</Fragment>
		)
}
export default EditArticleForm