import React, {Fragment} from 'react'
import {Field, ErrorMessage} from 'formik'
import {Pane, TextInput} from 'evergreen-ui'
import ErrorText from '../formikcomponents/ErrorText'

const Input =(props)=> {

	const {label, name, ...rest} = props

	return(
		<Fragment>
		<Pane 
		marginBottom={20}>

		<placeholder  
		htmlFor={name}>
		{label}
		</placeholder>

		<Field 
		as={TextInput}
		id={name} 
		name={name}
		{...rest} />

		<ErrorMessage 
		name={name} 
		component={ErrorText}/>
		</Pane>
		</Fragment>
		)
}
export default Input