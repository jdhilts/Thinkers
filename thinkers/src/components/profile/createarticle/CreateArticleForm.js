import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../../../formikcomponents/FormikControl'
import {Pane, Card, Text, Button} from 'evergreen-ui'

const CreateArticleForm =(props)=> {

	return(

		<Formik 
		initialValues={props.initialValues} 
		validationSchema={props.validationSchema} 
		onSubmit={props.onSubmit}>
		{
			formik => (
				<Form>			

				<Pane
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				marginBottom={20}>

				<Card
				id='create_article_card'
				display='flex' 
				flexDirection='column'
				justifyContent='center' 
				alignItems='center'    
				marginTop={20} 
				padding={20} 
				border='default'
				borderRadius='none'  
				background='#F9F9FB'
				width='100%'
				maxWidth={700} 
				minWidth={350} 
				maxHeight={900}>

				<Text
				textAlign='center'
				size={800}
				marginBottom={20}
				marginTop={10}
				color='#101840'>
				Create Article
				</Text>

				<FormikControl
				style={{'textAlign':'center'}}
				fontSize={18}
				height={40}
				minWidth={250}
				borderRadius='none'
				control='input' 
				type='text' 
				name='title'
				placeholder='Title'/>

				<FormikControl
				style={{'whiteSpace':'pre-wrap','lineHeight':'25px'}}
				fontSize={18}
				row='100%'
				cols={100}
				width='100%'
				maxWidth={700} 
				minWidth={350} 
				marginBottom={20}
				control='textarea'
				type='text'
				name='body'
				placeholder='Article'/>

				<Button
				marginRight={20}
				paddingLeft={30}
				border='default'
				backgroundColor='#EBF0FF'
				borderRadius='none'
				color='#101840'
				height={40}
				minWidth={137}
				type='submit' 
				disabled={!formik.isValid}>
				Post Article
				</Button>
				</Card>
				</Pane>
				
				</Form>
				)
		}
		</Formik>
		
		)
}
export default CreateArticleForm