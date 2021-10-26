import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from "react-bootstrap";
import avatar from "../users/img/No_avatar.png";

function UserInfoPopup(props) {
    const [close, setClose] = useState(false);

    const handlerClosePopup = () => {
        setClose(!close)
    }
    // useEffect(() => {
    //     return !close;
    // })
    const {id, first_name, last_name, email, gender, city, country} = props.users;
   if (!close) {
    return (
            <div className="container-user-info">
                <div className="info-header">
                    User Information
                </div>
                <div className="user-info">
                    Name: {first_name}
                </div>
                <div className="user-info">
                    Last Name: {last_name}
                </div>
                <div className="user-info">
                    Email: {email}
                </div>
                <div className="user-info">
                    Gender: {gender}
                </div>
                <div className="user-info">
                    City: {city}
                </div>
                <div className="user-info">
                    Country: {country}
                </div>
                <Button onClick={handlerClosePopup}>OK</Button>
            </div>
            
        
    )
   }
   return null;
}

export default UserInfoPopup;