import React, {useEffect, useState} from 'react'
import PublicRoutes from './components/routes/PublicRoutes'
import PrivateRoutes from './components/routes/PrivateRoutes'

const App =(props)=> {

	const [loggedIn, setLoggedIn] = useState()
	const [id, setId] = useState()

	useEffect(()=> {
		const token = window.localStorage.getItem('token')
		fetch('https://afternoon-temple-12069.herokuapp.com/login', {
			method: 'POST',
			'Access-Control-Allow-Origin': '*',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(response => response.json())
		.then(id => {
			if(id && id.id){
				setLoggedIn(true)
				setId(id.id)						 	
			} else {
				setLoggedIn(false)
			}
		})
		.catch(console.log)
	},[])

	return(	
			!loggedIn ? <PublicRoutes/>
			:			
			<PrivateRoutes id={id}/>	
		)
}

export default App