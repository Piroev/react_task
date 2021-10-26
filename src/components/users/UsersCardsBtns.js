import React, { useState } from 'react';
import { ButtonGroup, Button } from "react-bootstrap"
import UserInfoPopup from './UserInfoPopup';

function UsersCardsBtns(props) {
    
    const user = props.users;
    const [popup, setPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handlePopupOpen = (user) => {
        setPopup(true);
        setSelectedUser(user);
    }
    
    return (
            <div>
            <ButtonGroup>
                <Button variant="primary" onClick={(e) => {
                    e.preventDefault();
                    handlePopupOpen(user);
                }}>More Info</Button>
                
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
            </ButtonGroup>
            {popup && <UserInfoPopup users={user}/>}
            </div>
        
    );
}

export default UsersCardsBtns;