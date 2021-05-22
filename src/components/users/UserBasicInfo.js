import React from 'react'
import { useQuery } from 'react-apollo'
import { getUserQuery } from '../../queries/usersQueries'

function UserBasicInfo(props){
    const {
        loading:userBasicInfoLoading,
        error:userBasicInfoError,
        data:userBasicInfoData
    }=useQuery(getUserQuery,
        {variables:{userID:props.userID}})
    const displayUserBasicInfo=()=>{
        if(!props.userID){
            return <div>Select a User</div>
        }
        if(userBasicInfoLoading){
            return <div>Loading User Basic Info...</div>
        }
        if(userBasicInfoError){
            return <div>An Error Occured! Failed to load User Basic Info</div>
        }        
        const {user}=userBasicInfoData
        if(user){
            return(
                <div>
                    <p>User Details</p>
                    <h3>ID : {user.id}</h3>
                    <p>Name : {user.first_name} {user.last_name}</p>
                    <p>Email address : {user.email_address}</p>
                    <p>Phone : {user.mobile_number}</p>
                </div>
            )
        }
        return(<div>User entry with ID {props.userID} not present</div>)
    }
    return(
        displayUserBasicInfo()
    )
    
}
export default UserBasicInfo