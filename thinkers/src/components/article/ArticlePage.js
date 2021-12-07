import React, {useEffect, useState, Fragment} from 'react'
import {Spinner} from 'evergreen-ui'
import Article from '../article/Article'
import Header from '../Header'
import Footer from '../Footer'

const ArticlePage =(props)=> {

	const [article, setArticle] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(()=> {
		setLoading(true)
		fetch(`https://nameless-spire-69225.herokuapp.com/article/${props.article_id}`)
		.then(response => {return response.json()})
		.then(article => setArticle(article))
		.catch(error => setError(error))
		.finally(()=> setLoading(false))
	},[props.article_id])

	if(loading || !Array.isArray(article)){return <Spinner/>}
		
		if(error){setError('Could not load article :(')}

			return(	
			<Fragment>
			<Header/>
			{			
				article.map(article => {
					return <Article
					key={article.article_id}
					article_id={article.article_id}
					id={article.id}
					name={article.name}
					date_published={article.date_published}
					title={article.title}
					body={article.body}/>				
				})
			}
				<Footer/>
				</Fragment>							
				)
	}
	export default ArticlePage;