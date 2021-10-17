import React, { useState } from 'react';
import users from "./users.json";

function EditUser(props) {

    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(name);
    }
    return (
        <div className="popup">
            <form className="submitForm" onSubmit={handleSubmit}>
                <span className="formInputLabel">Name</span><input className="formInputs" type="text" name="name" value={props.user.first_name} onChange={e => setName(e.target.value)}></input>
                <span className="formInputLabel">Last Name</span><input className="formInputs" type="text" name="lastname" value={props.user.last_name}></input>
                <span className="formInputLabel">Email Address</span><input className="formInputs" type="email" name="email" value={props.user.email}></input>
                <span className="formInputLabel">Gender</span><input className="formInputs" type="text" name="gender" value={props.user.gender}></input>
                <span className="formInputLabel">City</span><input className="formInputs" type="text" name="city" value={props.user.city}></input>
                <span className="formInputLabel">Country</span><input className="formInputs" type="text" name="country" value={props.user.country}></input>
                <input className="submit" type="submit"></input>
            </form>
        </div>
    )
    
}

export default EditUser;
                