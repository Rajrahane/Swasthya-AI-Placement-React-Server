import React, { useState } from 'react'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import '../../styles/userDetails.css'
import UserBasicInfo from './UserBasicInfo';

function UserSearch(){
    const [userID,setUserID]=useState();
    const [isFormSubmitted,setFormSubmitted]=useState(false)
    return(
        <div>
            <Container><Jumbotron>
            <h1 className='text-center'>User Search</h1>
            <hr/>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                setFormSubmitted(true)
            }}>
                <Form.Group>
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type='text'
                    onChange={(e)=>{
                        setFormSubmitted(false)
                        setUserID(e.target.value)
                    }}/>
                    <Button variant='primary' type='submit'
                        disabled={isFormSubmitted || !userID}
                    >Fetch User Details</Button>
                </Form.Group>
            </Form>
            </Jumbotron></Container>
            {
                isFormSubmitted &&
                <Container className='user-details'>
                    <h2 className='text-center'>User Basic Info</h2>
                    <UserBasicInfo userID={userID}/>
                </Container>
            }
        </div>
    )

}
export default UserSearch