import gql from 'graphql-tag'

const createUserMutation=gql`
    mutation($userInput:UserInput!){
        createUserMutation:createUser(user:$userInput){
            id
            email_address
        }
    }
`
export {createUserMutation}