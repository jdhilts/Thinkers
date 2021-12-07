import Input from '../formikcomponents/Input'
import TextArea from '../formikcomponents/TextArea'
import React from 'react'
// import Select from '../components/Select'
// import Radio from '../components/Radio'
// import CheckboxGroup from '../components/CheckboxGroup'
// import SelectDate from '../components/SelectDate'

const FormikControl =(props)=> {
	const {control, ...rest} = props

	switch(control) {
		case 'input': 
		return <Input {...rest} />
		case 'textarea':
		return <TextArea {...rest}/>
		// case 'select':
		// return <Select {...rest}/>
		// case 'radio':
		// return <Radio {...rest}/>
		// case 'checkbox':
		// return <CheckboxGroup {...rest}/>
		// case 'date':
		// return <SelectDate {...rest}/>
		default: return null
	}
}
export default FormikControl
