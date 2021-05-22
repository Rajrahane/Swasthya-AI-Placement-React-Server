import gql from 'graphql-tag'

const getBlogQuery=gql`
    query($blogID:ID){
        blog(id:$blogID){
            id
            name
            totalComments
            usersCount
        }
    }
`
const getBlogComments=gql`
    query($blogID:ID){
        blogComments:blog(id:$blogID){
            id
            comments{
                id
                message
                user{
                    id
                    first_name
                    last_name
                }
            }
        }
    }
`
export {getBlogQuery,getBlogComments}