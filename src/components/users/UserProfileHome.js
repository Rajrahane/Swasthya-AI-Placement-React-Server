import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'
import UserBasicInfo from './UserBasicInfo'
import '../../styles/userDetails.css'
function UserProfileHome(){
    let {userID}=useParams()
    return(
        <Container><Jumbotron>
            <h1 className='text-center'>User Profile Home</h1>
            <br/>
            <div className='user-details'>
                <UserBasicInfo userID={userID}/>
            </div>
            <br/>
        </Jumbotron></Container>
    )
}
export default UserProfileHome