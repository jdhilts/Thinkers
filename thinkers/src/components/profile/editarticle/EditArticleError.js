import {Pane} from 'evergreen-ui'

const EditArticleError =(props)=> {

	return(
			<Pane 
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'> 
			<h5 
			style={{'color':'#ff0000', 'marginTop':'10px', 'marginBottom':'3px'}}>
			{props.error}
			</h5>
			</Pane>	
		)
}
export default EditArticleError