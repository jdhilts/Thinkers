import React from 'react'
import {Pane} from 'evergreen-ui'
import blogger from './blogger.png'

const Blogger =()=> {

	return(
		<Pane
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'
		minWidth='350px'>
		<img src={blogger} 
		alt='Thinker' 
		style={{'width':'350px',
		'height':'auto'}} />
		</Pane>
		)
}
export default Blogger