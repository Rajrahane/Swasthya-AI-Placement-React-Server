import React from 'react'
import { useQuery } from 'react-apollo'
import { getBlogQuery } from '../../queries/blogsQueries'

function BlogBasicInfo(props){
    const {
        loading:blogBasicInfoLoading,
        error:blogBasicInfoError,
        data:blogBasicInfoData
    }=useQuery(getBlogQuery,
        {variables:{blogID:props.blogID}})
    const displayBlogBasicInfo=()=>{
        if(!props.blogID){
            return <div>Select a Blog</div>
        }
        if(blogBasicInfoLoading){
            return <div>Loading Blog Basic Info...</div>
        }
        if(blogBasicInfoError){
            return <div>An Error Occured! Failed to load Blog Basic Info</div>
        }        
        const {blog}=blogBasicInfoData
        if(blog){
            return(
                <div>
                    <p>Blog Details</p>
                    <h3>ID : {blog.id}</h3>
                    <p>Name : {blog.name}</p>
                    <p>Total Comments: {blog.totalComments}</p>
                    <p>Unique Users : {blog.usersCount}</p>
                </div>
            )
        }
        return(<div>Blog entry with ID {props.blogID} not present</div>)
    }
    return(
        displayBlogBasicInfo()
    )
    
}
export default BlogBasicInfo