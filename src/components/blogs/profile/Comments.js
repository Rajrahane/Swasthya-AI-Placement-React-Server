import React from 'react'
import { useQuery } from 'react-apollo'
import { getBlogComments } from '../../../queries/blogsQueries'
import { withRouter } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'

function BlogComments(props){
    const {
        loading:blogCommentsLoading,
        error:blogCommentsError,
        data:blogCommentsData
    }=useQuery(getBlogComments,{
        variables:{blogID:props.blogID}
    })
    const displayBlogComments=()=>{
        if(!props.blogID){
            return <div>Please provide a Blog ID</div>
        }
        if(blogCommentsLoading){
            return <div>Loading Project Events Summary...</div>
        }
        if(blogCommentsError){
            return <div>An Error Occured! Failed to load Project Events Summary</div>
        }  
        if(blogCommentsData.blogComments){
            const {comments}=blogCommentsData.blogComments
            if(comments.length>0){
                return(
                    <div>
                    <Table responsive striped hover bordered size='sm'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            comments.map(({message,user},index)=>{
                                return(
                                    <tr key={index}>
                                        <td><Button variant='success'
                                        onClick={()=>{
                                            props.history.push(`/users/${user.id}`)
                                        }}>{user.first_name} {user.last_name}</Button> {message}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                    </div>
                )
            }            
            return(<div>No Comments to display</div>)
        }
        return(<div>Error! Blog with Blog ID: {props.blogID} not found</div>)
    }
    return(
        displayBlogComments()
    )
}
export default withRouter(BlogComments)