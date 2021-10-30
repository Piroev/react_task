import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from "react-redux";
import UserComponent from "./UserComponent";
import { connect } from "react-redux"

const UsersList = (props) => {

    const users = props.usersData.users;

    return (
            <ul>
                {users.map((user) => {

        
                return <ListGroup key={user.id.toString()}>
                            <ListGroup.Item as="li" variant="info" border="dark">
                                <UserComponent user={user} key={user.email}/>
                            </ListGroup.Item>
                        </ListGroup>
                })}
            </ul>
    )
    
}
    
    
const mapStateToProps = state => {
    return {
        ...state
    }
}



export default connect(mapStateToProps)(UsersList);
