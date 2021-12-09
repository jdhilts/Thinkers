import React from 'react'
import {Pane, Dialog} from 'evergreen-ui'
import {navigate} from '@reach/router'

const  Alert =(props)=> {

	return(
		<Pane>
			<Dialog
			width={600}
			height={25}
			isShown={props.isShown}
			title='Account added.'
			onCloseComplete={() => navigate(`${props.navigate}`)}
			hasFooter={false}>
			{props.dialog}
			</Dialog>
			</Pane>
			)

}
export default Alert