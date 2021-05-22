import React, {useState} from 'react'
import { Container, Jumbotron, Form, ButtonGroup, Button } from 'react-bootstrap'
import ResponseModal from '../ResponseModal'
import { createBlogMutation } from '../../mutations/blogsMutations'
import { useMutation } from 'react-apollo'

function BlogRegistrationForm(props){
    const [blog,setBlog]=useState({})
    const [createBlog]=useMutation(createBlogMutation)
    const [responseModalVisibility,setResponseModalVisibility]=useState(false)
    const [responseData,setResponseData]=useState("")
    const onHideResponseModal=()=>{
        setResponseModalVisibility(false)
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        document.getElementById('submitFormBtn').disabled=true
        await createBlog({
            variables:{
                blogInput:blog
            }
        })
        .then(
            res=>{
                setResponseData(<div>
                    Result: Entry Inserted Successfully!<br/>
                    Blog ID :{res.data.createBlogMutation.id}<br/>
                    Blog Name :{res.data.createBlogMutation.name}
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
            <h1 className="text-center">Blog Registration</h1>
            <hr/>
            <Form className='was-validated' onSubmit={(e)=>submitForm(e)}>
                <Form.Group controlId='blogName'>
                    <Form.Label>Blog Name</Form.Label>
                    <Form.Control type='text' required
                        onChange={(e)=>{setBlog({
                            ...blog,
                            "name":e.target.value
                        })}}
                    />
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
export default BlogRegistrationForm