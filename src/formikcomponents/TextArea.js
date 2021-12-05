import {Field, ErrorMessage} from 'formik'
import ErrorText from '../formikcomponents/ErrorText'
import {Textarea} from 'evergreen-ui'
import React, {Fragment} from 'react'

const TextArea =(props)=> {

	const {label, name, ...rest} = props

	return(
		<Fragment>
		<label htmlFor={name}>
		{label}
		</label>

		<Field 
		as={Textarea}
		id={name}
		name={name}
		{...rest}/>

		<ErrorMessage 
		name={name}
		component={ErrorText}/>
		</Fragment>
		)
}
export default TextArea;