import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'
import '../../styles/blogDetails.css'
import BlogBasicInfo from './BlogBasicInfo'
import Comments from './profile/Comments'
function BlogProfileHome(){
    let {blogID}=useParams()
    return(
        <Container><Jumbotron>
            <h1 className='text-center'>Blog Profile Home</h1>
            <br/>
            <div className='blog-details'>
                <BlogBasicInfo blogID={blogID}/>
            </div>
            <br/>
            <Comments blogID={blogID}/>
        </Jumbotron></Container>
    )
}
export default BlogProfileHome