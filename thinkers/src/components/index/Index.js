import React, {Fragment} from 'react'
import {Pane} from 'evergreen-ui'
import Articles from '../index/Articles'
import About from '../index/About'
import Header from '../Header'
import Footer from '../Footer'

const Index =(props)=> {
	
	return(
		<Fragment>
		<Header/>
		<Pane 
		id='index_container' 
		width='100%'
		minWidth={375} 
		height='auto' 
		display='flex' 
		flexDirection='column' 
		alignItems='center' 
		justifyContent='center'>	
		<About/>
		<Articles/>
		</Pane>
		<Footer/>
		</Fragment>
		)
}
export default Index;