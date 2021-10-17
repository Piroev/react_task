import React, { useState } from 'react';
import users from "./users.json";

function EditUser(props) {
    
    return (
        <div className="popup">
            <span className="formInputLabel">Name</span><input className="formInputs" type="text" name="name"></input>
            <span className="formInputLabel">Last Name</span><input className="formInputs" type="text" name="lastname"></input>
            <span className="formInputLabel">Email Address</span><input className="formInputs" type="email" name="email"></input>
            <span className="formInputLabel">Gender</span><input className="formInputs" type="text" name="gender"></input>
            <span className="formInputLabel">City</span><input className="formInputs" type="text" name="city"></input>
            <span className="formInputLabel">Country</span><input className="formInputs" type="text" name="country"></input>
            <input className="submit" type="submit"></input>
        </div>
    )
    
}

export default EditUser;
                