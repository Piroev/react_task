import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from "react-redux";
import UserComponent from "./UserComponent";

const UsersList = (props) => {


    const users = useSelector((state) => state.usersData.users);
    
    return (
            <ul>
                {users.map((user) => {

        
                return <ListGroup key={user.id.toString()}>
                            <ListGroup.Item as="li" variant="info" border="dark">
                                <UserComponent user={user} key={user.email.toString()}/>
                            </ListGroup.Item>
                        </ListGroup>
                })}
            </ul>
    )
    
}
    
    




export default UsersList;
