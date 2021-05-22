import gql from 'graphql-tag'

const createBlogMutation=gql`
    mutation($blogInput:BlogInput!){
        createBlogMutation:createBlog(blog:$blogInput){
            id
            name
        }
    }
`
export {createBlogMutation}