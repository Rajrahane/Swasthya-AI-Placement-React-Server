import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import BlogRegistrationForm from './BlogRegistrationForm'
import BlogsNavbar from './BlogsNavbar'
import BlogSearch from './BlogSearch'
import BlogProfileHome from './BlogProfileHome'

function BlogsHomePage(){
 let {path,url}=useRouteMatch()
 return(
     <div>
         <Switch>
             <Route exact path={path}>
                <Container>
                    <h1 className="text-center">Blogs Home</h1><br/>
                    <BlogsNavbar/>
                    <h3>Please select a child page</h3>
                    <p>Enter /blogs/:blogID to view profile</p>
                </Container>
             </Route>
             <Route exact path={`${url}/register`} component={BlogRegistrationForm}/>
             <Route exact path={`${url}/search`} component={BlogSearch}/>
             <Route exact path={`${url}/:blogID`} children={<BlogProfileHome/>}/>
         </Switch>
     </div>
 )
}
export default BlogsHomePage