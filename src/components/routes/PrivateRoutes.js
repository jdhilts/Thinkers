import React from 'react'
import {Router} from '@reach/router'
import ProfilePage from '../profile/ProfilePage'
import UploadPhoto from '../profile/uploadphoto/UploadPhoto'
import EditAccount from '../profile/editaccount/EditAccount'
import ChangePassword from '../profile/changepassword/ChangePassword'
import CreateArticle from '../profile/createarticle/CreateArticle'
import ResetPassword from '../resetpassword/ResetPassword'
import NotFound from '../index/NotFound'
import ProfilePageIndex from '../home/ProfilePageIndex'

const PrivateRoutes =(props)=> {
	const id = props.id
	return(
		<Router>		
		<ProfilePageIndex id={id} path='/'/>
		<ProfilePage path='/profile/:id'/>		
		<UploadPhoto path='/upload_photo/:id'/>
		<EditAccount path='/update_profile/:id'/>
		<ChangePassword path='/update_password/:id'/>
		<CreateArticle path='/create_article/:id'/>	
		<ResetPassword path='/update_password/:id'/>
		<ProfilePageIndex path='profilepageindex'/>
		<NotFound default/>
		</Router>
		)
}

export default PrivateRoutes