import {Spinner, Text} from 'evergreen-ui'
import React, {useState, useEffect, Fragment} from 'react'
import ArticleSnippet from '../index/ArticleSnippet'

const Articles =()=> {

	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()

	useEffect(()=> {
		setLoading(true)
		fetch('https://nameless-spire-69225.herokuapp.com/')
		.then(response => {return response.json()})
		.then(articles => setArticles(articles))
		.catch(error => setError(error))
		.finally(()=> setLoading(false))
	},[])

	if(loading) {return <Spinner/>}

		if(error || !Array.isArray(articles)){return <Text>Could not load articles!</Text>}

			return(	
				<Fragment>		
				{
					articles.map((articles) => {
						return(
							<ArticleSnippet
							key={articles.article_id}
							id={articles.id}
							article_id={articles.article_id}
							name={articles.name}
							date_published={articles.date_published}
							title={articles.title}
							body={articles.body}/>
							)
					})
				}
				</Fragment>
				)
	}
	export default Articles;