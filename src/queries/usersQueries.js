import gql from 'graphql-tag'

const getUserQuery=gql`
    query($userID:ID){
        user(id:$userID){
            id
            first_name
            last_name
            email_address
            mobile_number
        }
    }
`
export {getUserQuery}