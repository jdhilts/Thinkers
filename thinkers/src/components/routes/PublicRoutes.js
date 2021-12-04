import React from 'react'
import {Router} from '@reach/router'
import Index from '../index/Index'
import LoginPage from '../login/LoginPage'
import SignUpPage from '../signup/SignUpPage'
import ArticlePage from '../article/ArticlePage'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import NotFound from '../index/NotFound'
import ResetPassword from '../resetpassword/ResetPassword'

const PublicRoutes =(props)=> {

	return(
		<Router>
		<Index path='/'/>
		<LoginPage path='/login'/>
		<SignUpPage path='/signup'/>
		<ArticlePage path='/article/:article_id'/>
		<ForgotPassword path='/send_reset_email'/>
		<ResetPassword path='/reset_password/'/>
		<Index path='index'/>
		<NotFound default/>		
		</Router>
		)
}

export default PublicRoutes