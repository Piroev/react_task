import React, { useState } from 'react';
import { ButtonGroup, Button } from "react-bootstrap"
import UserInfoPopup from './UserInfoPopup';
import EditUser from "./EditUser"

function UsersCardsBtns(user) {

    const [popup, setPopup] = useState(false);
    const [popupEdit, setPopupEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const switchLocalState = (localState) => {
        return !localState;
    }
    
    const handlePopupOpen = (user) => {
        setPopup(switchLocalState(popup));
        setSelectedUser(user);
    }
    const handlePopupOpenEdit = (user) => {
        setPopupEdit(switchLocalState(popupEdit));
        setSelectedUser(user);
    }
    const handleCloseBtn = () => {
        setPopup(switchLocalState(popup));
      }
    const handlePopupCloseEdit = () => {
      setPopupEdit(switchLocalState(popupEdit));
    }
    return (
            <div>
            <ButtonGroup>
                <Button variant="primary" onClick={(e) => {
                    e.preventDefault();
                    handlePopupOpen(user);
                }}>More Info</Button>
                
                <Button className="btn btn-warning" onClick={handlePopupOpenEdit}>Edit</Button>
                <Button className="btn btn-danger">Delete</Button>
            </ButtonGroup>
            {popup && <UserInfoPopup user={user}
                                     setPopup={setPopup}
                                     handleCloseBtn={handleCloseBtn} />
            }
            {popupEdit && <EditUser user={user}
                                    setPopupEdit={setPopupEdit}
                                    handlePopupCloseEdit={handlePopupCloseEdit}/>}

            </div>
        
    );
}

export default UsersCardsBtns;