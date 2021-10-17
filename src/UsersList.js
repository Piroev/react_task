import React, { useState} from "react";
import EditUser from "./EditUser";
import users from "./users.json";

function UsersList(){
    const [popup, setPopup] = useState(false);
    const [selected, setSelected] = useState(null);
    
    function handlePopupOpen(user){

        setPopup(true);
        setSelected(user);
    }

    return (
        <div className="Users">
            <ul>
                {users.map( (user) => {

                    return <li className="usersList" key = {user.id}><span className="infoLable">Name:</span><span className = "userInfo">{user.first_name}</span>
                                                                     <span className="infoLable">Surname:</span><span className = "userInfo">{user.last_name}</span>
                                                                     <span className="infoLable">E-mail:</span><span className = "userInfo">{user.email}</span>
                                                                     <span className="infoLable">Gender:</span><span className = "userInfo">{user.gender}</span>
                                                                     <span className="infoLable">City:</span><span className = "userInfo">{user.city}</span>
                                                                     <span className="infoLable">Country:</span><span className = "userInfo">{user.country}</span>
                                                                     <button className="rowBtns" id="edit" onClick={(e) => {
                                                                                                                        e.preventDefault();
                                                                                                                        handlePopupOpen(user)}}>Edit</button>
                                                                     <button className="rowBtns" id="delete">Delete</button>
                        </li>
                })}
            </ul>
            {popup && <EditUser user={selected}/>}
        </div>
    )
}

export default UsersList;