import React, { useState } from 'react';
import users from "./users.json";

function EditUser(props) {
    
    return (
        <div className="popup">
            <input type="text" name="name" placeholder="Enter you name"></input>
        </div>
    )
    
}

export default EditUser;
                //     <input type="text" name="name">
                //     <input type="text" name="lastName">
                //     <input type="email" name="email">
                //     <input type="text" name="gender">
                //    <input type="text" name="city">
                //    <input type="text" name="country"></input>