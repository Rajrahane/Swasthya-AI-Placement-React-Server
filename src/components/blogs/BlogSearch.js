import React, { useState } from 'react'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import '../../styles/blogDetails.css'
import BlogBasicInfo from './BlogBasicInfo';

function BlogSearch(){
    const [blogID,setBlogID]=useState();
    const [isFormSubmitted,setFormSubmitted]=useState(false)
    return(
        <div>
            <Container><Jumbotron>
            <h1 className='text-center'>Blog Search</h1>
            <hr/>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                setFormSubmitted(true)
            }}>
                <Form.Group>
                    <Form.Label>Blog ID</Form.Label>
                    <Form.Control type='text'
                    onChange={(e)=>{
                        setFormSubmitted(false)
                        setBlogID(e.target.value)
                    }}/>
                    <Button variant='primary' type='submit'
                        disabled={isFormSubmitted || !blogID}
                    >Fetch Blog Details</Button>
                </Form.Group>
            </Form>
            </Jumbotron></Container>
            {
                isFormSubmitted &&
                <Container className='blog-details'>
                    <h2 className='text-center'>Blog Basic Info</h2>
                    <BlogBasicInfo blogID={blogID}/>
                </Container>
            }
        </div>
    )

}
export default BlogSearch