import React from 'react'
import { Container } from 'react-bootstrap'
import HomeNavbar from './HomeNavbar'

function HomePage(){
 return(
     <div>
        <Container>    
            <h1 className="text-center">Blog System</h1><br/>
            <HomeNavbar/>
            <br/>
            <h3>Welcome to Blog System!</h3>
        </Container>
     </div>
 )
}
export default HomePage