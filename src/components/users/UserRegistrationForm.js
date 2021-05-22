import React, {useState} from 'react'
import { Container, Jumbotron, Form, ButtonGroup, Button } from 'react-bootstrap'
import ResponseModal from '../ResponseModal'
import { createUserMutation } from '../../mutations/usersMutations'
import { useMutation } from 'react-apollo'

function UserRegistrationForm(props){
    const [user,setUser]=useState({})
    const [createUser]=useMutation(createUserMutation)
    const [responseModalVisibility,setResponseModalVisibility]=useState(false)
    const [responseData,setResponseData]=useState("")
    const onHideResponseModal=()=>{
        setResponseModalVisibility(false)
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        document.getElementById('submitFormBtn').disabled=true
        await createUser({
            variables:{
                userInput:user
            }
        })
        .then(
            res=>{
                setResponseData(<div>
                    Result: Entry Inserted Successfully!<br/>
                    User ID : {res.data.createUserMutation.id}<br/>
                    User Email ID: {res.data.createUserMutation.email_address}
                </div>)
            },
            err=>{
                console.log("Error",JSON.stringify(err))
                var errorMessage=<div>
                <p>An Error Occured while submitting the form.</p>
                <ul>{err.graphQLErrors.map(({message},index)=>(
                    <li key={index}>{message}</li>
                ))}</ul></div>
                setResponseData(errorMessage)
            }
        )
        setResponseModalVisibility(true)
    }
    return(
    <>
        <Container><Jumbotron>
            <h1 className="text-center">User Registration</h1>
            <hr/>
            <Form className='was-validated' onSubmit={(e)=>submitForm(e)}>
                <Form.Group controlId='emailAddress'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' required
                        onChange={(e)=>{setUser({
                            ...user,
                            "email_address":e.target.value
                        })}}
                    />
                    <Form.Control.Feedback type='invalid'>Enter Valid Email</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' required
                        style={{textTransform:"uppercase"}} 
                        onChange={(e)=>{setUser({
                            ...user,
                            "first_name":e.target.value.toUpperCase()
                        })}}
                    />
                </Form.Group>
                <Form.Group controlId='lastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' required
                        style={{textTransform:"uppercase"}} 
                        onChange={(e)=>{setUser({
                            ...user,
                            "last_name":e.target.value.toUpperCase()
                        })}}
                    />
                </Form.Group>
                <Form.Group controlId='mobileNumber'>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control pattern='[0-9]{10}' placeholder='0123456789' type='tel' required
                        onChange={(e)=>{setUser({
                            ...user,
                            "mobile_number":e.target.value
                        })}}
                    />
                    <Form.Control.Feedback type='invalid'>Enter Valid Mobile Number</Form.Control.Feedback>
                </Form.Group>
                <ButtonGroup>
                    <Button variant='primary' type='submit' id='submitFormBtn'>Submit</Button>
                    <Button variant='danger' onClick={(e)=>{e.preventDefault();window.location.reload()}}>Reload Page</Button>
                </ButtonGroup>
            </Form>
        </Jumbotron></Container>
        <ResponseModal
            show={responseModalVisibility}
            data={responseData}
            onHide={onHideResponseModal}
        />
    </>
    )
}
export default UserRegistrationForm