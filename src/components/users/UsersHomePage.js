import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import UserRegistrationForm from './UserRegistrationForm'
import UsersNavbar from './UsersNavbar'
import UserSearch from './UserSearch'
import UserProfileHome from './UserProfileHome'

function UsersHomePage(){
 let {path,url}=useRouteMatch()
 return(
     <div>
         <Switch>
             <Route exact path={path}>
                <Container>
                    <h1 className="text-center">Users Home</h1><br/>
                    <UsersNavbar/>
                    <h3>Please select a child page</h3>
                    <p>Enter /users/:userID to view profile</p>
                </Container>
             </Route>
             <Route exact path={`${url}/register`} component={UserRegistrationForm}/>
             <Route exact path={`${url}/search`} component={UserSearch}/>
             <Route exact path={`${url}/:userID`} children={<UserProfileHome/>}/>
         </Switch>
     </div>
 )
}
export default UsersHomePage